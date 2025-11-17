import React from 'react';
import ProductList from "@/app/admin/products/productList";
import {Product} from "@/types/product";
import {products} from "@/db/schema";

export const dynamic = "force-dynamic";

const Page = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
        cache: "no-store",
    });
    const productList: Product[] = await res.json();
    return (
        <div>
            <h2>
                상품리스트 관리
            </h2>

            <ProductList productList={productList}></ProductList>
        </div>
    );
};

export default Page;