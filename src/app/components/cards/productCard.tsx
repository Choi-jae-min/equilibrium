import React, {FC} from 'react';
import {MdOutlineArrowOutward} from "react-icons/md";
import Image from "next/image";

interface Props{
    title : string;
    type : 'COFFEE' | 'DESSERT' | 'FILTER_COFFEE' | 'BEVERAGE' | 'BEER' | 'TEA';
    img_src : string;
}

const ProductCard:FC<Props> = ({title , type , img_src}) => {
    return (
        <div className={'group hover:cursor-pointer'}>
            <p className={'text-12 text-gray-500 pb-2'}>{type}</p>
            <span className="flex items-center space-x-2 pb-3 relative group overflow-hidden">
              <h1 className="relative text-nowrap text-14 sm:text-18 font-semibold">
                {title}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-black
                                 scale-x-0 origin-left transition-transform duration-300
                                 group-hover:scale-x-100 pointer-events-none"></span>
              </h1>
              <MdOutlineArrowOutward className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </span>


            <div className={'relative w-full h-[400px] sm:h-[250px] lg:h-[500px] overflow-hidden group rounded-lg'}>
                <Image
                    src={img_src}
                    alt="Coffee image 1"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-120"
                />
            </div>
        </div>
    );
};

export default ProductCard;