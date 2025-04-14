"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navlink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <li>
            <Link
                href={href}
                className={`${
                    pathname === href
                        ? "text-violet-500 hover:text-violet-500/80"
                        : "text-black hover:text-slate-700 dark:text-white dark:hover:text-slate-300"
                } py-2 px-4 md:p-4 font-bold w-full block border-b dark:border-slate-800 lg:border-none`}
            >
                {children}
            </Link>
        </li>
    );
};

export default Navlink;
