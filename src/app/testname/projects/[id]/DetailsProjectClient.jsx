"use client";

import { Carousel } from "@/templates/testname/components/molecules";
import Link from "next/link";

const DetailsProjectClient = ({ datas }) => {
    return (
        <div>
            <div className="w-full h-[85vh] flex flex-col gap-6 md:gap-10 justify-center items-center bg-[url('/heroes.jpg')] dark:bg-[url('/heroesDark.jpg')] bg-cover bg-scroll">
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl tracking-wide dark:text-white">
                        {datas.name}
                    </h1>
                </div>
                <div className="p-1 lg:w-[50%] text-center">
                    <p className="text-sm md:text-base lg:text-2xl dark:text-white">
                        {datas.overview}
                    </p>
                </div>
                <div className="bg-violet-500 w-40 h-12 hover:bg-violet-500/80 lg:text-xl font-bold rounded-lg text-white">
                    <Link
                        href={`${datas.linkProject}`}
                        target="_blank"
                        className="w-full h-full flex items-center justify-center"
                    >
                        LIVE LINK
                    </Link>
                </div>
            </div>
            <div className="w-full h-full px-2 py-10 lg:p-7 flex flex-col justify-center items-center dark:text-white dark:bg-[#121212] overflow-x-hidden">
                <div className="w-[90%] lg:w-[55%] max-w-full space-y-20 overflow-hidden">
                    <Carousel datas={datas.mediaLinks} />
                    <div className="space-y-6">
                        <div>
                            <h2 className="font-bold text-lg lg:text-xl tracking-wider">
                                PROJECT OVERVIEW
                            </h2>
                        </div>
                        <div>
                            <p className="text-sm lg:text-base">
                                {datas.projectOverview}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="font-bold text-lg lg:text-xl tracking-wider">
                                TOOLS USED
                            </h2>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            {datas.toolsUsed?.map((tool, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 lg:p-4 flex justify-center items-center bg-[rgb(235,235,235)] dark:bg-black rounded-md"
                                >
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="font-bold text-lg lg:text-xl tracking-wider">
                                SEE LIVE
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-violet-500 w-24 h-12 lg:w-40 hover:bg-violet-500/80 lg:text-xl font-bold rounded-lg text-white">
                                <Link
                                    href={datas.linkProject}
                                    target="_blank"
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    LIVE LINK
                                </Link>
                            </div>
                            <div className="bg-violet-500 w-24 h-12 lg:w-40 hover:bg-violet-500/80 lg:text-xl font-bold rounded-lg text-white">
                                <Link
                                    href={`/testname`}
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    GO BACK
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProjectClient;
