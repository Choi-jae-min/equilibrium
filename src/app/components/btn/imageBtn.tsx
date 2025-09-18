import React, {FC} from 'react';
import {MdOutlineArrowOutward} from "react-icons/md";

interface Props{
    title : string;
    onClick : () => void;
    className?:string;
    disabled?:boolean
}

const ImageBtn :FC<Props> = ({title, onClick, className ,disabled = false}) => {
    return (
        <div>
            <button
                disabled={disabled}
                className={`flex items-center space-x-1 group ${className}`}
                onClick={() => onClick()}
            >
                <p className={'text-12 lg:text-14'}>{title}</p>
                <MdOutlineArrowOutward className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </button>
        </div>
    );
};

export default ImageBtn;