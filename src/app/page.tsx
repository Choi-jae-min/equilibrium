'use client'
import Image from "next/image";
import ImageBtn from "@/app/components/btn/imageBtn";
import {useEffect, useState} from "react";
import Header from "@/app/components/header";
import Section2 from "@/app/components/main/section2";
import Section3 from "@/app/components/main/section3";

export default function Home() {

    const [time, setTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().toLocaleTimeString("en-US", { hour12: false, timeZone: "Asia/Seoul" });
            setTime(now);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
    <div className="font-sans p-8 pt-4 pb-20 gap-16 sm:p-20 sm:px-10 sm:pt-5">
        <Header/>
        <main>

          <p className={`italic`}>Redefining Balance in Coffee Culture</p>
          <p className={`italic`}>From EQBM .</p>

          <div className={'text-12 pt-10 flex justify-between items-end lg:hidden'}>
              <span>
                  <p className="">3F, 7 Achasan-ro 30-gil, Gwangjin-gu, Seoul, Korea</p>
                  <p className="font-mono">{time}</p>
                  <p className="">+0507 1332 6073</p>
              </span>
              <p className={'font-mono flex items-end text-nowrap'}>from 2020.</p>
          </div>


          <div className="lg:pt-10 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 gap-2 lg:gap-4 pt-5">
              <div>
                  <div className="hidden lg:flex relative w-full h-[300px] lg:row-span-1">
                      <h2 className={'font-mono absolute left-[50%] font-semibold pt-5'}>Awaken Your Senses,<br/> One Sip at a Time</h2>
                      <div className={'text-12 pb-10 flex justify-between w-full items-end'}>
                          <span>
                              <p className="">3F, 7 Achasan-ro 30-gil, Gwangjin-gu, Seoul, Korea</p>
                              <p className="font-mono">{time}</p>
                              <p className="">+0507 1332 6073</p>
                          </span>
                          <p className={'font-mono flex items-end'}>from 2020.</p>
                      </div>
                  </div>

                  <div className="relative w-full h-96 lg:h-[500px] overflow-hidden group rounded-lg lg:row-span-1">
                      <Image
                          src="/images/main.jpg"
                          alt="Coffee image 1"
                          fill
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <ImageBtn
                          title={'The Equilibrium Way'}
                          onClick={() => {}}
                          className="bg-white absolute top-5 right-5 px-4 py-2 shadow rounded-2xl hover:cursor-pointer"
                      />
                  </div>
              </div>

              <div className="relative w-full h-[600px] lg:h-[800px] overflow-hidden group rounded-lg lg:row-span-2">
                  <Image
                      src="/images/ankue.jpg"
                      alt="Coffee image 1"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <ImageBtn
                      title={'Respect the Beans feat.커향존중'}
                      onClick={() => {}}
                      className="bg-white absolute top-5 right-5 px-4 py-2 shadow rounded-2xl hover:cursor-pointer"
                  />
              </div>
          </div>
            <Section2/>
            <Section3/>
      </main>
    </div>
  );
}
