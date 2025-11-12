export type Product = {
    id: string;//uuid
    koreaName: string;
    englishName : string;
    price: number;
    imgSrc: string;
    productType: ProductType;
};

export type ProductType =
    | "COFFEE"
    | "DESSERT"
    | "BEVERAGE"
    | "TEA"
    | "FILTER_COFFEE";
