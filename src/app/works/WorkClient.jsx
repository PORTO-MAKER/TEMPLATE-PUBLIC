"use client";

import { fadeUp, slideInLeft, slideInRight } from "@/utils";
import Link from "next/link";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa6";
import {
    AnimatedList,
    AnimatedPageContainer,
    AnimatedSection,
    AnimatedText,
} from "@/components/organisms";
import { ProjectCard } from "@/components/molecules";

const WorkClient = ({ projects }) => {
    return (
        <AnimatedPageContainer>
            <header className="px-6 py-12 bg-green-300 border-b-8 border-black">
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
                        My Works
                    </AnimatedText>
                    <motion.p
                        variants={slideInRight}
                        className="text-xl max-w-2xl border-4 border-black bg-white p-4 rotate-1 inline-block"
                    >
                        A collection of my best work across web and mobile
                        development.
                    </motion.p>
                </div>
            </header>
            {projects.length > 0 ? (
                <AnimatedSection className="px-6 py-16">
                    <div className="container mx-auto max-w-5xl">
                        <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) =>
                                project.status ? (
                                    <motion.div key={index} variants={fadeUp}>
                                        <ProjectCard
                                            title={project.name}
                                            description={project.overview}
                                            image={project.image}
                                            link={project.linkProject}
                                            color={
                                                index % 2 === 0
                                                    ? "bg-violet-200"
                                                    : "bg-green-200"
                                            }
                                            haveDetails={project._id}
                                        />
                                    </motion.div>
                                ) : null
                            )}
                        </AnimatedList>
                    </div>
                </AnimatedSection>
            ) : (
                <p className="text-lg md:text-xl max-w-2xl mb-8 border-4 border-black bg-white p-4 rotate-1">
                    Currently, I am working on a personal project that I will
                    showcase soon. Stay tuned!
                </p>
            )}
        </AnimatedPageContainer>
    );
};

export default WorkClient;
