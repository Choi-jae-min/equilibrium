import React from 'react';
import {MdOutlineArrowOutward} from "react-icons/md";

const LinkCard = () => {
    return (
        <div className={'hover:cursor-pointer'}>
            <p className={'text-12 text-gray-500 pb-2 invisible'}>type</p>
            <span className="flex items-center space-x-2 pb-3 invisible">
                <h1 className="relative text-18 font-semibold">title</h1>
                <MdOutlineArrowOutward className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
           </span>
            <div className="group relative h-[400px] sm:h-[250px] lg:h-[500px] w-full border-y border-gray-300 overflow-hidden">
                <div className="absolute inset-0 bg-stone-500 scale-x-0 origin-left transition-transform duration-700 ease-in-out group-hover:scale-x-100"></div>
                <MdOutlineArrowOutward size={40} className="absolute top-2 right-2 transition-transform-color duration-900 ease-in-out group-hover:rotate-45 group-hover:text-white" />
                <div className="absolute bottom-2 left-2">
                    <p className="text-18 lg:text-36 transition-colors duration-500 ease-in-out group-hover:text-white">
                        Explore More Menu
                    </p>
                </div>
            </div>

        </div>
    );
};

export default LinkCard;