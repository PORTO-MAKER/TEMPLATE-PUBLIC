"use client";

import { IoCodeSlashSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { ArrowSkill, Timeline, Card } from "@/components/molecules";
import {
    formPattern,
    handleSubmitData,
    skillPattern,
    socmedPattern,
} from "@/patterns";
import Link from "next/link";
import { useGlobalHooks } from "@/hooks";
import { SendEmailJsService } from "@/services";
import { Form } from "@/components/organisms";

const HomeClient = ({ account }) => {
    const { loadingButton, setLoadingButton } = useGlobalHooks();

    return (
        <div>
            <div className="w-full min-h-svh flex flex-col gap-6 md:gap-10 justify-center items-center bg-[url('../assets/heroes.jpg')] dark:bg-[url('../assets/heroesDark.jpg')] bg-cover bg-fixed relative">
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl tracking-wide dark:text-white">
                        HEY, I&apos;M {account.userData.name}
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 1 }}
                    className="p-1 lg:w-[50%] text-center"
                >
                    <p className="text-sm md:text-base lg:text-2xl dark:text-white">
                        {account.userDetailData.overview}
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 1 }}
                >
                    <ul className="flex gap-10">
                        {account.userDetailData &&
                            socmedPattern.map(
                                (column, i) =>
                                    account.userDetailData.socialMedia[
                                        column.key
                                    ] && (
                                        <li key={i}>
                                            <Link
                                                href={
                                                    account.userDetailData
                                                        .socialMedia[column.key]
                                                }
                                                target="_blank"
                                            >
                                                <column.icon className="text-black w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 hover:text-black/70 dark:text-white dark:hover:text-slate-300" />
                                            </Link>
                                        </li>
                                    )
                            )}
                    </ul>
                </motion.div>
                <div className="absolute bottom-2">
                    <IoCodeSlashSharp className="w-8 h-8 md:w-10 md:h-10 dark:text-white" />
                </div>
            </div>
            <div className="w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center bg-[#FAFAFA] dark:bg-[#121212]">
                <>
                    <motion.div
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{
                            opacity: 1,
                            translateY: 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="inline-block relative bg-[#FAFAFA] dark:bg-[#121212]"
                    >
                        <h2 className="font-bold text-2xl lg:text-3xl tracking-wider dark:text-white">
                            OVERVIEW
                        </h2>
                        <div className="absolute -bottom-5 left-[50%] -translate-x-[50%] w-[20%] h-[5px] bg-violet-500"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{
                            opacity: 1,
                            translateY: 0,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="lg:text-2xl text-center dark:text-white">
                            Here you will find more information about me, what I
                            do, and my current skills mostly in terms of
                            programming and technology
                        </p>
                    </motion.div>
                    <div className="flex w-full flex-col px-4 lg:px-11 space-x-3 space-y-4 lg:space-y-0 overflow-hidden gap-8">
                        <div className="flex flex-col lg:flex-row gap-4 w-full">
                            <div className="lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, translateX: -100 }}
                                    whileInView={{
                                        opacity: 1,
                                        translateX: 0,
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col flex-wrap items-center space-y-9"
                                >
                                    <h3 className="font-semibold text-xl dark:text-white">
                                        Education
                                    </h3>
                                    <Timeline
                                        datas={account.userEducationData}
                                    />
                                </motion.div>
                            </div>
                            <div className="lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, translateX: 100 }}
                                    whileInView={{
                                        opacity: 1,
                                        translateX: 0,
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col text-center space-y-9"
                                >
                                    <h3 className="font-semibold text-xl dark:text-white">
                                        Skills
                                    </h3>
                                    <div className="lg:px-9 space-y-1 dark:text-white">
                                        <ArrowSkill
                                            rows={account.userSkillData.skills}
                                            columns={skillPattern}
                                            // darkMode={darkMode}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, translateX: -100 }}
                                whileInView={{
                                    opacity: 1,
                                    translateX: 0,
                                }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col flex-wrap items-center lg:w-3/4 space-y-9"
                            >
                                <h3 className="font-semibold text-xl dark:text-white">
                                    Experiences
                                </h3>
                                <Timeline datas={account.userExperienceData} />
                            </motion.div>
                        </div>
                    </div>
                </>
            </div>
            <div className="w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center dark:bg-black dark:text-white">
                <>
                    <motion.div
                        initial={{ opacity: 0, translateX: -100 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="inline-block relative"
                    >
                        <h2 className="font-bold text-2xl lg:text-3xl tracking-wider">
                            PROJECTS
                        </h2>
                        <div className="absolute -bottom-5 left-[50%] -translate-x-[50%] w-[20%] h-[5px] bg-violet-500"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateX: -100 }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="lg:text-2xl text-center">
                            Here you will find some of the personal and clients
                            projects that I created with each project containing
                            its own case study
                        </p>
                    </motion.div>
                    <div className="w-[75%] mt-9 space-y-8 overflow-hidden">
                        {account.userProjectData ? (
                            account.userProjectData.map((data, i) => (
                                <div
                                    className="flex flex-col lg:flex-row items-center justify-center w-full gap-10"
                                    key={i}
                                >
                                    <Card
                                        image={data.image}
                                        title={data.name}
                                        description={data.overview}
                                        link={`/projects/${data._id}`}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="w-full flex items-center justify-center">
                                <h2 className="text-2xl font-bold text-center">
                                    No Projects Found
                                </h2>
                            </div>
                        )}
                        <div className="text-center p-4">
                            <a
                                href={`/projects`}
                                className="text-violet-500 hover:text-violet-500/80"
                            >
                                See More!
                            </a>
                        </div>
                    </div>
                </>
            </div>
            <div className="w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center bg-[url('../assets/heroes.jpg')] dark:bg-[url('../assets/heroesDark.jpg')] bg-cover bg-fixed dark:text-white overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="inline-block relative mt-10 lg:mt-0"
                >
                    <h2 className="font-bold text-2xl lg:text-3xl tracking-wider">
                        CONTACT
                    </h2>
                    <div className="absolute -bottom-5 left-[50%] -translate-x-[50%] w-[20%] h-[5px] bg-violet-500"></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    whileInView={{
                        opacity: 1,
                        translateX: 0,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="lg:text-2xl text-center">
                        Feel free to Contact me by submitting the form below and
                        I will get back to you as soon as possible
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-[50%] bg-white dark:bg-[#121212] shadow-sm"
                >
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
                </motion.div>
            </div>
        </div>
    );
};

export default HomeClient;
