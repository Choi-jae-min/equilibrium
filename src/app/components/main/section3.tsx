import React from 'react';
import ProductCard from "@/app/components/cards/productCard";
import LinkCard from "@/app/components/cards/LinkCard";
import {Product} from "@/types/product";

type Props = { productList: Array<Product> };

const Section3 = ({ productList }: Props) => {

    return (
        <section className={'pt-10 border-t border-gray-300'}>
            <h2 className={'font-semibold pb-4s flex items-center'}>
                <div className={'flex-shrink-0 w-[8px] mdm:w-[9px] h-[8px] mdm:h-[9px] bg-current rounded-full pointer-events-none mr-[8px]'}/>Our Menu</h2>

            <p className={'font-medium text-right'}>discover our coffee and desserts.</p>

            <article className={'grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4'}>
                {productList.map((product) => (
                    <ProductCard key={product.id} title={product.koreaName} type={product.productType} img_src={`${process.env.CLOUDFRONT_DOMAIN}/${product.image?.imageKey || "default"}`}/>
                ))}
                <LinkCard/>
            </article>
        </section>
    );
};

export default Section3;