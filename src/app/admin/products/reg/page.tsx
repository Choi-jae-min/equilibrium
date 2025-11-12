"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

export default function ProductCreatePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);

    const [form, setForm] = useState({
        name: "",
        koreaName: "",
        price: "",
        imgSrc: "",
        productType: "COFFEE",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));

        if (name === "imgSrc") {
            setPreview(value || null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    price: Number(form.price),
                }),
            });

            if (!res.ok) throw new Error("등록 실패");
            toast.success("상품이 성공적으로 등록되었습니다!");
            router.push("/admin/products");
        } catch (err) {
            console.error(err);
            toast.error("상품 등록 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-8">
            <h1 className="text-2xl font-semibold mb-6">상품 등록</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                    <label className="block text-sm font-medium mb-1">상품 이름(한글)</label>
                    <input
                        name="koreaName"
                        value={form.koreaName}
                        onChange={handleChange}
                        placeholder="아메리카노"
                        className="w-full border rounded-md px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">상품 이름(영문)</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Americano"
                        className="w-full border rounded-md px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">가격 (₩)</label>
                    <input
                        name="price"
                        type="number"
                        min="0"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="4000"
                        className="w-full border rounded-md px-3 py-2"
                        required
                    />
                </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">상품 이미지</label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;

                                const imageUrl = URL.createObjectURL(file);
                                setPreview(imageUrl);

                                setForm((prev) => ({
                                    ...prev,
                                    imgFile: file,
                                    imgSrc: file.name,
                                }));
                            }}
                            className="w-full border rounded-md px-3 py-2 file:cursor-pointer file:border-none file:bg-gray-100 file:px-3 file:py-1.5"
                        />

                        {preview ? (
                            <div className="relative w-full h-48 mt-3 rounded-md overflow-hidden border">
                                <Image
                                    src={preview}
                                    alt="미리보기"
                                    fill
                                    className="object-cover"
                                    onError={() => {
                                        setPreview(null);
                                        toast.error("이미지를 불러올 수 없습니다.");
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="w-full h-48 mt-3 rounded-md border flex items-center justify-center text-gray-400 text-sm bg-gray-50">
                                이미지 미리보기
                            </div>
                        )}
                    </div>
                <div>
                    <label className="block text-sm font-medium mb-1">상품 유형</label>
                    <select
                        name="productType"
                        value={form.productType}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                    >
                        <option value="COFFEE">COFFEE</option>
                        <option value="DESSERT">DESSERT</option>
                        <option value="BEVERAGE">BEVERAGE</option>
                        <option value="TEA">TEA</option>
                        <option value="FILTER_COFFEE">FILTER_COFFEE</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                >
                    {loading ? "등록 중..." : "상품 등록"}
                </button>
            </form>
        </div>
    );
}
