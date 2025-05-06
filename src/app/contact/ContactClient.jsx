"use client";
import {
    AnimatedPageContainer,
    AnimatedSection,
    AnimatedText,
    Form,
} from "@/components/organisms";
import { formPattern, handleSubmitData, socmedPattern } from "@/patterns";
import { SendEmailJsService } from "@/services";
import { fadeUp, slideInLeft, slideInRight } from "@/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useGlobalHooks } from "@/hooks";

const ContactClient = ({ account }) => {
    const { setLoadingButton, loadingButton } = useGlobalHooks();

    return (
        <AnimatedPageContainer>
            <header className="px-6 py-12 bg-red-300 border-b-8 border-black">
                <div className="container mx-auto max-w-5xl">
                    <motion.div variants={slideInLeft}>
                        <Link
                            href="/"
                            className="inline-flex items-center mb-8 bg-white px-4 py-2 border-4 border-black hover:bg-black hover:text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
                        >
                            <FaArrowLeft className="mr-2 h-5 w-5" /> Back Home
                        </Link>
                    </motion.div>
                    <AnimatedText className="text-5xl md:text-7xl font-black mb-6">
                        Get In Touch
                    </AnimatedText>
                    <motion.p
                        variants={slideInRight}
                        className="text-xl max-w-2xl border-4 border-black bg-white p-4 rotate-1 inline-block"
                    >
                        Let&apos;s discuss your project or just say hello!
                    </motion.p>
                </div>
            </header>
            <AnimatedSection className="px-6 py-16">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <motion.div variants={slideInLeft} className="lg:w-2/3">
                            <AnimatedText className="text-4xl font-black mb-8">
                                Send Me a Message
                            </AnimatedText>
                            <motion.div
                                variants={fadeUp}
                                className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
                            >
                                {account.isContact ? (
                                    <Form
                                        dataForm={formPattern}
                                        handleSubmitData={(data, reset) =>
                                            handleSubmitData(
                                                data,
                                                SendEmailJsService,
                                                reset,
                                                setLoadingButton,
                                                account.userData.username
                                            )
                                        }
                                        buttonName="Submit"
                                        loading={loadingButton}
                                    />
                                ) : (
                                    <div className="text-center text-2xl font-bold">
                                        Contact Form is not available
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={slideInRight}
                            className="lg:w-1/3"
                        >
                            <AnimatedText className="text-4xl font-black mb-8">
                                Contact Info
                            </AnimatedText>

                            <div className="space-y-8">
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -5 }}
                                    className="bg-yellow-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
                                >
                                    <div className="flex items-start">
                                        <MdOutlineEmail className="h-6 w-6 mr-3 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-bold mb-1">
                                                Email
                                            </h3>
                                            <p>{account.userData.email}</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -5 }}
                                    className="bg-purple-300 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]"
                                >
                                    <h3 className="text-lg font-bold mb-3">
                                        Connect
                                    </h3>
                                    <div className="flex gap-3">
                                        {socmedPattern.map(
                                            (column) =>
                                                account.userDetailData
                                                    .socialMedia[
                                                    column.key
                                                ] && (
                                                    <motion.a
                                                        key={column.id}
                                                        whileHover={{
                                                            scale: 1.2,
                                                            rotate: -10,
                                                        }}
                                                        href={
                                                            account
                                                                .userDetailData
                                                                .socialMedia[
                                                                column.key
                                                            ]
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-white p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                                                    >
                                                        <column.icon className="h-5 w-5" />
                                                        <span className="sr-only">
                                                            {column.key}
                                                        </span>
                                                    </motion.a>
                                                )
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </AnimatedSection>
        </AnimatedPageContainer>
    );
};

export default ContactClient;
