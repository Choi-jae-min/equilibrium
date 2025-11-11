import { NextResponse } from "next/server";
import mockProducts from "@/app/mocks/productMock";

export async function GET() {
    return NextResponse.json(mockProducts);
}
