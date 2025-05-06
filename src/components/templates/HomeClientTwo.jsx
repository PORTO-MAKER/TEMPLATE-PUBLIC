"use client";

import { slideInLeft, slideInRight, fadeUp, bounceAnimation } from "@/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { ProjectCard } from "../molecules";
import {
    AnimatedList,
    AnimatedPageContainer,
    AnimatedSection,
    AnimatedText,
} from "../organisms";

const HomeClientTwo = ({ account }) => {
    return (
        <AnimatedPageContainer>
            <section className="relative px-6 py-24 md:py-32 overflow-hidden">
                <motion.div
                    variants={slideInLeft}
                    className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-br-3xl -translate-x-1/4 -translate-y-1/4 rotate-12"
                ></motion.div>
                <motion.div
                    variants={slideInRight}
                    className="absolute bottom-0 right-0 w-48 h-48 bg-red-500 rounded-tl-3xl translate-x-1/4 translate-y-1/4 -rotate-12"
                ></motion.div>
                <div className="container relative mx-auto max-w-5xl">
                    <AnimatedText className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                        Hello, I&apos;m{" "}
                        <span className="text-red-500">
                            {account.userData.name}
                        </span>
                    </AnimatedText>
                </div>
            </section>
            <section className="px-6 py-16 bg-blue-100 border-y-8 border-black">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black">
                            Featured Works
                        </h2>
                        <Link
                            href="/works"
                            className="bg-black text-white px-6 py-3 border-4 border-black hover:bg-white hover:text-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all"
                        >
                            All Works
                        </Link>
                    </div>
                    {account.userProjectData.length > 0 ? (
                        <AnimatedSection className="px-6 py-16">
                            <div className="container mx-auto max-w-5xl">
                                <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {account.userProjectData.map(
                                        (project, index) =>
                                            project.status ? (
                                                <motion.div
                                                    key={index}
                                                    variants={fadeUp}
                                                >
                                                    <ProjectCard
                                                        title={project.name}
                                                        description={
                                                            project.overview
                                                        }
                                                        image={project.image}
                                                        link={
                                                            project.linkProject
                                                        }
                                                        color={
                                                            index % 2 === 0
                                                                ? "bg-violet-200"
                                                                : "bg-green-200"
                                                        }
                                                        haveDetails={
                                                            project._id
                                                        }
                                                    />
                                                </motion.div>
                                            ) : null
                                    )}
                                </AnimatedList>
                            </div>
                        </AnimatedSection>
                    ) : (
                        <p className="text-lg md:text-xl max-w-2xl mb-8 border-4 border-black bg-white p-4 rotate-1">
                            Currently, I am working on a personal project that I
                            will showcase soon. Stay tuned!
                        </p>
                    )}
                </div>
            </section>
            <AnimatedSection className="px-6 py-16 bg-yellow-400 border-y-8 border-black">
                <div className="container mx-auto max-w-5xl text-center">
                    <AnimatedText className="text-4xl md:text-5xl font-black mb-6">
                        Let&apos;s Work Together
                    </AnimatedText>
                    <motion.div
                        variants={bounceAnimation}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/contact"
                            className="bg-black text-white border-4 border-black hover:bg-white hover:text-black text-lg px-8 py-6 h-auto rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all inline-flex items-center"
                        >
                            Get In Touch
                        </Link>
                    </motion.div>
                </div>
            </AnimatedSection>
        </AnimatedPageContainer>
    );
};

export default HomeClientTwo;
