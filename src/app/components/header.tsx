'use client'
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import {Burger, Transition} from '@mantine/core';


const Header = () => {
    const [opened, { toggle ,close }] = useDisclosure();
    return (
        <header className={'pb-2 relative z-50'}>
            <div className={'flex justify-between items-center relative z-50 pb-3'}>
                <h1 className={'text-24 font-semibold sm:text-36'}>The Equilibrium Coffee</h1>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    aria-label="Toggle navigation"
                    lineSize={2}
                    size="md"
                    color="black"
                />
            </div>
            <div className={'w-full bg-black h-[1px] relative z-50'}/>
            {opened && (
                <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
                    onClick={close}
                />
            )}


            <ul className="flex flex-col gap-4 p-6 px-0 text-lg absolute z-50">
                {['About', 'Menu', 'Contact'].map((item, index) => (
                    <Transition
                        key={item}
                        mounted={opened}
                        transition="fade-down"
                        duration={300}
                        timingFunction="ease"
                        exitDuration={150}
                    >
                        {(styles) => (
                            <li style={{ ...styles, transitionDelay: `${index * 100}ms` }}>
                                <a href={`#${item.toLowerCase()}`} onClick={close} className="hover:underline">
                                    {item}
                                </a>
                            </li>
                        )}
                    </Transition>
                ))}
            </ul>
        </header>
    );
};

export default Header;