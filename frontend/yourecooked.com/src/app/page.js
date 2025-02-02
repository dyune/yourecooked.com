"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dashboard } from "@/components/Dashboard";
import { Login } from "@/components/Login";
import { TableDemo } from "@/components/TableDemo";

export default function Home() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col gap-2">
            <Login/>
        </div>
    );
}
