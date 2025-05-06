"use client";

import Link from "next/link";
import { Navlink } from "../molecules";
import { useGlobalHooks } from "@/hooks";
import { handleButton, navbarPatternOne } from "@/patterns";
import { RxHamburgerMenu } from "react-icons/rx";
// import { GoMoon } from "react-icons/go";
// import { FaRegSun } from "react-icons/fa6";

const NavbarClientOne = ({ account }) => {
    const { hamburger, setHamburger } = useGlobalHooks();

    return (
        <header className="w-full flex justify-between items-center fixed top-0 py-[1rem] px-2 lg:px-[5rem] z-10 bg-white border-b border-slate-300 dark:border-slate-800 dark:bg-black">
            <Link href={`/`} className="flex items-center space-x-5">
                <img
                    src={account.userData.image}
                    alt="picture"
                    className="md:w-12 md:h-12 h-8 w-8 rounded-full"
                />
                <p className="font-bold text-lg md:text-xl tracking-wider dark:text-white">
                    {account.userData.name}
                </p>
            </Link>
            <div className="flex items-center justify-center gap-5">
                <nav
                    className={`${
                        hamburger ? "block animate-fade-in" : "hidden"
                    } absolute top-full right-0 lg:relative w-full lg:w-auto text-end lg:text-inherit bg-white dark:bg-black lg:block`}
                >
                    <ul className="flex lg:gap-5 flex-col lg:flex-row">
                        {navbarPatternOne.map((item) => (
                            <Navlink key={item.id} href={item.href}>
                                {item.title}
                            </Navlink>
                        ))}
                    </ul>
                </nav>
                <div
                    className="h-5 w-5 md:w-[27px] md:h-[27px] lg:hidden cursor-pointer"
                    onClick={() => handleButton(setHamburger)}
                >
                    <RxHamburgerMenu className="w-full h-full dark:text-white" />
                </div>
                {/* <div className="h-5 w-5 md:w-[27px] md:h-[27px]">
                    <button className="w-full h-full cursor-pointer">
                        {theme === "light" ? (
                            <FaRegSun
                                className="w-full h-full hover:text-slate-600 dark:text-white dark:hover:text-slate-300"
                                onClick={() => setTheme("light")}
                            />
                        ) : (
                            <GoMoon
                                className="w-full h-full hover:text-slate-600"
                                onClick={() => setTheme("dark")}
                            />
                        )}
                    </button>
                </div> */}
            </div>
        </header>
    );
};

export default NavbarClientOne;
