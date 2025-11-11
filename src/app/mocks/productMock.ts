import { Product } from "@/types/product";

export const mockProducts: Product[] = [
    { id: "p1", koreaName: "에스프레소",englishName :'espresso', price: 3500, imgSrc: "/images/latteSingle.jpg", productType: "COFFEE" },
    { id: "p2", koreaName: "아메리카노",englishName :'americano', price: 5500, imgSrc: "/images/latteSingle.jpg", productType: "COFFEE" },
    { id: "p3", koreaName: "라떼 싱글 오리진",englishName :'Latte Single Origin', price: 6500, imgSrc: "/images/latteSingle.jpeg", productType: "COFFEE" },
    { id: "p4", koreaName: "뮤제 바닐라 ",englishName :'Muze Vanilla', price: 6000, imgSrc: "/images/muze.jpg", productType: "DESSERT" },
    { id: "p5", koreaName: "웨딩 임페리얼",englishName :'Wedding Imperial', price: 7000, imgSrc: "/images/wedding.jpg", productType: "TEA" },
    { id: "p6", koreaName: "트와일라잇",englishName :'Twilight', price: 6500, imgSrc: "/images/twilight.jpg", productType: "COFFEE" },
    { id: "p7", koreaName: "레드 게이샤",englishName :'Red ', price: 8000, imgSrc: "/images/redFilter.jpg", productType: "FILTER_COFFEE" },
];
export default mockProducts;
