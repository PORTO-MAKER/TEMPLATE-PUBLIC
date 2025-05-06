"use client";

import {
    AnimatedList,
    AnimatedPageContainer,
    AnimatedSection,
    AnimatedText,
} from "@/components/organisms";
import { FaArrowLeft, FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "motion/react";
import {
    fadeUp,
    formatDate,
    slideInLeft,
    slideInRight,
    staggerContainer,
} from "@/utils";
import Image from "next/image";
import { ExperienceCard } from "@/components/molecules";
import { SkillBadge } from "@/components/atoms";

const AboutClient = ({ account }) => {
    return (
        <AnimatedPageContainer>
            <header className="px-6 py-12 bg-blue-300 border-b-8 border-black">
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
                        About Me
                    </AnimatedText>
                    <motion.p
                        variants={slideInRight}
                        className="text-xl max-w-2xl border-4 border-black bg-white p-4 rotate-1 inline-block"
                    >
                        Summary of me, my skills, and my experience in the tech
                        world.
                    </motion.p>
                </div>
            </header>
            <AnimatedSection className="px-6 py-16">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <motion.div variants={slideInLeft} className="md:w-2/5">
                            <div className="relative">
                                <div className="absolute inset-0 bg-yellow-400 border-4 border-black translate-x-4 translate-y-4"></div>
                                <Image
                                    src={account.userData.image}
                                    alt={account.userData.name}
                                    width={600}
                                    height={600}
                                    className="relative z-10 border-4 border-black object-cover aspect-square"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={slideInRight}
                            className="md:w-3/5"
                        >
                            <AnimatedText className="text-4xl font-black mb-6">
                                Hello there!
                            </AnimatedText>
                            <div className="space-y-4 text-lg">
                                <AnimatedText type="paragraph" delay={0.1}>
                                    {account.userDetailData.overview}
                                </AnimatedText>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection className="px-6 py-16 bg-purple-300 border-y-8 border-black">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex items-center mb-12">
                        <FaBriefcase className="h-10 w-10 mr-4" />
                        <AnimatedText className="text-4xl font-black">
                            Work Experience
                        </AnimatedText>
                    </div>
                    <AnimatedList className="space-y-8">
                        {account.userExperienceData.length > 0 ? (
                            account.userExperienceData.map((experience, i) => (
                                <motion.div variants={fadeUp} key={i}>
                                    <ExperienceCard
                                        title={experience.position}
                                        company={experience.organizationName}
                                        period={`${formatDate(
                                            experience.startDate
                                        )} - ${formatDate(experience.endDate)}`}
                                        achievements={experience.dotPoint}
                                        color={
                                            i % 4 === 0
                                                ? "bg-blue-300"
                                                : i % 4 === 1
                                                ? "bg-red-300"
                                                : i % 4 === 2
                                                ? "bg-white-300"
                                                : "bg-orange-300"
                                        }
                                        overview={experience.overview}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-lg md:text-xl max-w-2xl mb-8 border-4 border-black bg-white p-4 rotate-1">
                                I&apos;m currently preparing to share exciting
                                updates about my professional experiences and
                                projects. Stay tuned for more!
                            </p>
                        )}
                    </AnimatedList>
                </div>
            </AnimatedSection>
            <AnimatedSection className="px-6 py-16">
                <div className="container mx-auto max-w-5xl">
                    <AnimatedText className="text-4xl font-black mb-12">
                        Skills & Technologies
                    </AnimatedText>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="flex flex-wrap gap-3"
                    >
                        {account.userSkillData.skills.Languages.map(
                            (skill, i) => (
                                <SkillBadge
                                    name={skill.name}
                                    color={
                                        i % 6 === 0
                                            ? "bg-yellow-300"
                                            : i % 6 === 1
                                            ? "bg-purple-300"
                                            : i % 6 === 2
                                            ? "bg-blue-300"
                                            : i % 6 === 3
                                            ? "bg-green-300"
                                            : i % 6 === 4
                                            ? "bg-red-300"
                                            : "bg-orange-300"
                                    }
                                    key={i}
                                />
                            )
                        )}
                        {account.userSkillData.skills.LibrariesAndFrameworks.map(
                            (skill, i) => (
                                <SkillBadge
                                    name={skill.name}
                                    color={
                                        i % 6 === 0
                                            ? "bg-yellow-300"
                                            : i % 6 === 1
                                            ? "bg-purple-300"
                                            : i % 6 === 2
                                            ? "bg-blue-300"
                                            : i % 6 === 3
                                            ? "bg-green-300"
                                            : i % 6 === 4
                                            ? "bg-red-300"
                                            : "bg-orange-300"
                                    }
                                    key={i}
                                />
                            )
                        )}
                        {account.userSkillData.skills.PlatformsAndCloudServices.map(
                            (skill, i) => (
                                <SkillBadge
                                    name={skill.name}
                                    color={
                                        i % 6 === 0
                                            ? "bg-yellow-300"
                                            : i % 6 === 1
                                            ? "bg-purple-300"
                                            : i % 6 === 2
                                            ? "bg-blue-300"
                                            : i % 6 === 3
                                            ? "bg-green-300"
                                            : i % 6 === 4
                                            ? "bg-red-300"
                                            : "bg-orange-300"
                                    }
                                    key={i}
                                />
                            )
                        )}
                        {account.userSkillData.skills.DatabasesAndStorage.map(
                            (skill, i) => (
                                <SkillBadge
                                    name={skill.name}
                                    color={
                                        i % 6 === 0
                                            ? "bg-yellow-300"
                                            : i % 6 === 1
                                            ? "bg-purple-300"
                                            : i % 6 === 2
                                            ? "bg-blue-300"
                                            : i % 6 === 3
                                            ? "bg-green-300"
                                            : i % 6 === 4
                                            ? "bg-red-300"
                                            : "bg-orange-300"
                                    }
                                    key={i}
                                />
                            )
                        )}
                        {account.userSkillData.skills.DevelopmentEnvironmentsAndTools.map(
                            (skill, i) => (
                                <SkillBadge
                                    name={skill.name}
                                    color={
                                        i % 6 === 0
                                            ? "bg-yellow-300"
                                            : i % 6 === 1
                                            ? "bg-purple-300"
                                            : i % 6 === 2
                                            ? "bg-blue-300"
                                            : i % 6 === 3
                                            ? "bg-green-300"
                                            : i % 6 === 4
                                            ? "bg-red-300"
                                            : "bg-orange-300"
                                    }
                                    key={i}
                                />
                            )
                        )}
                    </motion.div>
                </div>
            </AnimatedSection>
            <AnimatedSection className="px-6 py-16 bg-green-300 border-y-8 border-black">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex items-center mb-12">
                        <FaGraduationCap className="h-10 w-10 mr-4" />
                        <AnimatedText className="text-4xl font-black">
                            Education
                        </AnimatedText>
                    </div>
                    <AnimatedList className="space-y-8">
                        {account.userEducationData.length > 0 ? (
                            account.userEducationData.map((education, i) => (
                                <motion.div variants={fadeUp} key={i}>
                                    <ExperienceCard
                                        key={i}
                                        title={education.degree}
                                        company={education.school}
                                        period={`${formatDate(
                                            education.startDate
                                        )} - ${formatDate(education.endDate)}`}
                                        achievements={education.dotPoint}
                                        color={
                                            i % 4 === 0
                                                ? "bg-yellow-300"
                                                : i % 4 === 1
                                                ? "bg-purple-300"
                                                : i % 4 === 2
                                                ? "bg-blue-300"
                                                : "bg-orange-300"
                                        }
                                        overview={education.overview}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-lg md:text-xl max-w-2xl mb-8 border-4 border-black bg-white p-4 rotate-1">
                                I&apos;m currently preparing to share exciting
                                updates about my educational experiences. Stay
                                tuned for more!
                            </p>
                        )}
                    </AnimatedList>
                </div>
            </AnimatedSection>
        </AnimatedPageContainer>
    );
};

export default AboutClient;
