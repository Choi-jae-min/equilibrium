import React from 'react';
import ProductCard from "@/app/components/cards/productCard";
import LinkCard from "@/app/components/cards/LinkCard";

const Section3 = () => {
    return (
        <section className={'pt-10 border-t border-gray-300'}>
            <h2 className={'font-semibold pb-4s flex items-center'}>
                <div className={'flex-shrink-0 w-[8px] mdm:w-[9px] h-[8px] mdm:h-[9px] bg-current rounded-full pointer-events-none mr-[8px]'}/>Our Menu</h2>

            <p className={'font-medium text-right'}>discover our coffee and desserts.</p>

            <article className={'grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4'}>
                <ProductCard title={'라떼 싱글 오리진 Latte Single Origin'} type={'COFFEE'} img_src={'/images/latteSingle.jpeg'}/>
                <ProductCard title={'뮤제 바닐라 Muze Vanilla'} type={'DESSERT'} img_src={'/images/muze.jpg'}/>
                <ProductCard title={'레드팝 Red Pop'} type={'BEVERAGE'} img_src={'/images/red pop.jpg'}/>
                <ProductCard title={'Wedding Imperial'} type={'TEA'} img_src={'/images/wedding.jpg'}/>
                <ProductCard title={'Twilight 트와일라잇'} type={'COFFEE'} img_src={'/images/twilight.jpg'}/>
                <ProductCard title={'Red 레드'} type={'FILTER_COFFEE'} img_src={'/images/redFilter.jpeg'}/>
                <ProductCard title={'House Blend'} type={'COFFEE'} img_src={'/images/houseBlend.jpg'}/>
                <LinkCard/>
            </article>
        </section>
    );
};

export default Section3;