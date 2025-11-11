import AdminHeader from "@/app/components/headers/adminHeader";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-dvh xl:mx-auto max-w-7xl mt-5 mx-4">
            <h1 className={'text-36 font-bold'}>EQBM Admin</h1>
            <AdminHeader />
            <div className="p-4">{children}</div>
        </div>
    );
}
