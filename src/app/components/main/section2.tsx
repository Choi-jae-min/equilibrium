'use client'
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    {
        src: `products/object1.jpg`,
        alt: "Coffee object1",
        w: "w-[55%] sm:w-[30%] md:w-[23%]",
        initial: { x: -100, y: -50, rotate: -15 }
    },
    {
        src: `products/object2.jpg`,
        alt: "Coffee object2",
        w: "w-[30%] sm:w-[20%] md:w-[15%]",
        initial: { x: 120, y: -80, rotate: 20 }
    },
    {
        src: `products/object3.jpg`,
        alt: "Coffee object3",
        w: "w-[43%] sm:w-[30%] md:w-[27%]",
        initial: { x: -60, y: 90, rotate: -10 }
    },
    {
        src: `products/object4.jpg`,
        alt: "Coffee object4",
        w: "w-[35%] sm:w-[25%] md:w-[18%] hidden sm:block",
        initial: { x: 100, y: 60, rotate: 12 }
    },
];
type Section1Props = {
    imageDomain: string;
};

const Section2 = ({ imageDomain }: Section1Props) => {
    return (
        <section className={'border-t-1 border-gray-300 mt-15 pt-10'}>
            <h2 className={'font-semibold pb-10 flex items-center'}>
                <div className={'flex-shrink-0 w-[8px] mdm:w-[9px] h-[8px] mdm:h-[9px] bg-current rounded-full pointer-events-none mr-[8px]'}/>The Equilibrium Experience</h2>
            <p className={'font-mono text-12 pb-14'}>Recognized by Blue Ribbon for excellence,<br/> The Equilibrium Coffee delivers premium coffee, artisanal milk teas, <br/> and desserts in a thoughtfully designed space <br/> that’s perfect for relaxing, working, or socializing.</p>
            <ul className="flex justify-between gap-3 items-end">
                {images.map((img, i) => (
                    <motion.li
                        key={i}
                        className={`relative ${img.w} aspect-[2/3]`}
                        initial={{
                            ...img.initial,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            y: 0,
                            rotate: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            delay: i * 0.3, // 순차 등장
                            type: "spring",
                        }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <Image
                            src={`${imageDomain}/${img.src}`}
                            alt={img.alt}
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </motion.li>
                ))}
            </ul>

            <div className={'sm:flex items-center pt-10 justify-between'}>
                <p className={'text-120 font-serif text-nowrap'}>Made to matter</p>

                <p className={'text-12 text-right pt-4 sm:pt-0'}>Contemporary coffee crafted for balance. <br/> Brewed for everyday moments, from the first sip.</p>
            </div>
        </section>
    );
};

export default Section2;