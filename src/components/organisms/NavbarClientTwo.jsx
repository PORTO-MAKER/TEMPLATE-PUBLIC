"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useGlobalHooks } from "@/hooks";
import { samePath, navItemVariants, mobileMenuVariants } from "@/utils";
import { handleButton, navbarPatternTwo } from "@/patterns";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { LuFrame } from "react-icons/lu";

const NavbarClientTwo = ({ account }) => {
    const { hamburger, setHamburger, pathname } = useGlobalHooks();

    return (
        <nav className="bg-white border-b-8 border-black sticky top-0 z-50">
            <div className="container mx-auto max-w-7xl px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <LuFrame className="h-8 w-8" />
                            <span className="font-black text-xl">
                                {account.userData.name}
                            </span>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            staggerChildren: 0.1,
                            delayChildren: 0.2,
                        }}
                        className="hidden md:flex items-center gap-8"
                    >
                        {navbarPatternTwo.map((item) => (
                            <motion.div
                                variants={navItemVariants}
                                key={item.id}
                            >
                                <Link
                                    href={item.href}
                                    className={`${
                                        item.id === 4
                                            ? "bg-black text-white px-4 py-2 border-4 border-black hover:bg-white hover:text-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
                                            : "font-bold hover:text-red-500 transition-colors"
                                    } ${
                                        samePath(pathname, item.href)
                                            ? item.id === 4
                                                ? "bg-red-500 border-red-500"
                                                : "text-red-500"
                                            : ""
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="md:hidden"
                        onClick={() => handleButton(setHamburger)}
                    >
                        {hamburger ? (
                            <MdClose className="h-8 w-8" />
                        ) : (
                            <RxHamburgerMenu className="h-8 w-8" />
                        )}
                    </motion.button>
                </div>

                {hamburger && (
                    <motion.div
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="md:hidden py-4 border-t-4 border-black mt-4"
                    >
                        <div className="flex flex-col gap-4">
                            {navbarPatternTwo.map((item) => (
                                <motion.div
                                    variants={navItemVariants}
                                    key={item.id}
                                >
                                    <Link
                                        href={item.href}
                                        className={`${
                                            item.id === 4
                                                ? "bg-black text-white px-4 py-2 border-4 border-black hover:bg-white hover:text-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
                                                : "font-bold hover:text-red-500 transition-colors py-2"
                                        } ${
                                            samePath(pathname, item.href)
                                                ? item.id === 4
                                                    ? "bg-red-500 border-red-500"
                                                    : "text-red-500"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleButton(setHamburger)
                                        }
                                    >
                                        {item.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default NavbarClientTwo;
