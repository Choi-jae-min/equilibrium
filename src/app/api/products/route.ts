import { NextResponse } from "next/server";
import { ProductInsert } from "@/types/product";
import { productImages, products } from "@/db/schema";
import { db } from "@/db/client";

export async function GET(req:Request){
 try {
     const result = await db.query.products.findMany({
         with: {
             image: true
         },
     });

     return NextResponse.json(result, { status: 200 });
 }catch (err){
     console.error("POST /api/products error:", err);
     return NextResponse.json(
         { message: "서버 에러가 발생했습니다." },
         { status: 500 }
     );
 }
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as ProductInsert & {
            imageKey: string; // iamge key
        };

        if (!body.koreaName || !body.price || !body.productType || !body.imageKey) {
            return NextResponse.json(
                { message: "필수 값이 누락되었습니다." },
                { status: 400 }
            );
        }

        const [createdProduct] = await db
            .insert(products)
            .values({
                koreaName: body.koreaName,
                englishName: body.englishName,
                description: body.description,
                price: body.price,
                productType: body.productType,
            })
            .returning();

        const [createdImage] = await db
            .insert(productImages)
            .values({
                productId: createdProduct.id,
                imageKey: body.imageKey,
            })
            .returning();

        return NextResponse.json(
            {
                message: "상품이 등록되었습니다.",
                product: createdProduct,
                image: createdImage,
            },
            { status: 201 }
        );
    } catch (err) {
        console.error("POST /api/products error:", err);
        return NextResponse.json(
            { message: "서버 에러가 발생했습니다." },
            { status: 500 }
        );
    }
}
