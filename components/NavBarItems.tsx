"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItems() {
    const path = usePathname();

    // https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
    // https://nextjs.org/docs/app/api-reference/functions/use-router#migrating-from-nextrouter

    return (
        <div className="lg:grid lg:grid-cols-4 lg:place-items-center-safe">
            <li className={path == "/about/dreamchasers" ? "rounded-sm bg-black text-white" : ""}>
                <Link href={"/about/dreamchasers"}>Chúng tôi là ai?</Link>
            </li>
            <li className={path == "/about/crew" ? "rounded-sm bg-black text-white" : ""}>
                <Link href={"/about/crew"}>Nhân sự</Link>
            </li>
            <li className={path == "/timeline" ? "rounded-sm bg-black text-white" : ""}>
                <Link href={"/timeline"}>Kế hoạch</Link>
            </li>
            <li className={path == "/tournament" ? "rounded-sm bg-black text-white" : ""}>
                <Link href={"/tournament"}>Tour</Link>
            </li>
        </div>
    );
}
