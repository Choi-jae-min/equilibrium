import { NextResponse } from "next/server";
import mockProducts from "@/app/mocks/productMock";
import {Product} from "@/types/product";

export async function GET() {
    return NextResponse.json(mockProducts);
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Omit<Product, "id">;

        if (!body.koreaName || !body.price || !body.productType) {
            return NextResponse.json(
                { message: "필수 값이 누락되었습니다." },
                { status: 400 }
            );
        }
        const newProduct: Product = {
            id: `p${Date.now()}`,
            ...body,
        };
        mockProducts.push(newProduct);

        return NextResponse.json(
            { message: "상품이 등록되었습니다.", product: newProduct },
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