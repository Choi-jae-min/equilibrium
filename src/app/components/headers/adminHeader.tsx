"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tabs = [
    { href: "/admin/products", label: "상품 리스트 관리" },
    { href: "/admin/reservations", label: "예약 리스트" },
    { href: "/admin/banners", label: "배너 관리" },
    { href: "/admin/users", label: "관리자 리스트" },
];

export default function AdminHeader() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-4 border-b px-4 py-3">
            {tabs.map(t => {
                const active = pathname === t.href || pathname.startsWith(t.href + "/");
                return (
                    <Link
                        key={t.href}
                        href={t.href}
                        className={clsx(
                            "px-2 py-1 rounded-md hover:bg-neutral-100",
                            active && "font-semibold underline"
                        )}
                        prefetch
                    >
                        {t.label}
                    </Link>
                );
            })}
        </nav>
    );
}
