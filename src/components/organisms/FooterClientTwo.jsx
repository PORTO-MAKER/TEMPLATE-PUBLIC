"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { socmedPattern } from "@/patterns";
import { fadeUp } from "@/utils";

const FooterClientTwo = ({ account }) => {
    return (
        <footer className="bg-black text-white border-t-8 border-black">
            <div className="container mx-auto max-w-7xl px-6 py-12">
                <motion.div
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-black mb-4">
                            {account.userData.name}
                        </h2>
                        <div className="flex gap-4">
                            {account.userDetailData &&
                                socmedPattern.map(
                                    (column) =>
                                        account.userDetailData.socialMedia[
                                            column.key
                                        ] && (
                                            <motion.div
                                                className="bg-white text-black p-2 rounded-none hover:bg-red-600 transition-colors"
                                                whileHover={{
                                                    scale: 1.2,
                                                    rotate: -10,
                                                }}
                                                key={column.id}
                                            >
                                                <Link
                                                    href={
                                                        account.userDetailData
                                                            .socialMedia[
                                                            column.key
                                                        ]
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <column.icon className="h-5 w-5" />
                                                    <span className="sr-only">
                                                        {column.name}
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        )
                                )}
                        </div>
                    </div>

                    <motion.div variants={fadeUp}>
                        <h3 className="text-xl font-bold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <motion.li whileHover={{ x: 5 }}>
                                <Link
                                    href="/"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }}>
                                <Link
                                    href="/works"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Works
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }}>
                                <Link
                                    href="/contact"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    Contact
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>{account.userData.email}</li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
                >
                    <p>
                        © {new Date().getFullYear()} {account.userData.name}.
                        All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default FooterClientTwo;
