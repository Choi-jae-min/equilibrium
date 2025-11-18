import Image from "next/image";
import ImageBtn from "@/app/components/btn/imageBtn";
import Header from "@/app/components/header";
import Section2 from "@/app/components/main/section2";
import Section3 from "@/app/components/main/section3";
import {Product} from "@/types/product";
import Section1 from "@/app/components/main/section1";

export default async function Home() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
        cache: "no-store",
    });
    const productList: Product[] = await res.json();



    return (
    <div className="font-sans p-8 pt-4 pb-20 gap-16 sm:p-20 sm:px-10 sm:pt-5">
        <Header/>
        <main>

        <p className={`italic`}>Redefining Balance in Coffee Culture</p>
        <p className={`italic`}>From EQBM .</p>
        <Section1/>
        <Section2/>
        <Section3 productList={productList}/>
      </main>
    </div>
  );
}
