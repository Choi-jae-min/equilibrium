import React from "react";
import { Product } from "@/types/product";
import Image from "next/image";

type Props = { productList: Array<Product> };

export default function ProductList({ productList }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
            {productList.map((product) => (
                <div
                    key={product.id}
                    className="bg-white border rounded-lg shadow-sm p-4 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer"
                >
                    {product.image && (
                        <div className="relative w-full h-40 rounded-md overflow-hidden bg-gray-100">
                            <Image
                                src={`${process.env.CLOUDFRONT_DOMAIN}/${product.image.imageKey}`}
                                alt={product.koreaName}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    <div className="flex flex-col gap-1">
                        <div className="text-lg font-semibold">{product.koreaName}</div>

                        <div className="text-sm text-gray-500">{product.englishName}</div>

                        <div className="flex justify-between items-center mt-2">
              <span className="text-base font-medium">
                {product.price.toLocaleString()}원
              </span>

                            <span className="px-2 py-1 text-xs rounded-md bg-gray-100 border">
                {product.productType}
              </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
