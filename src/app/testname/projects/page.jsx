import { GetAllProjectUserService } from "@/services";
import { Card } from "@/templates/testname/components/molecules";

export const metadata = {
    title: "Projects",
    description:
        "Here you will find all of the personal and clients projects that I created with each project containing its own case study",
};

const ProjectPage = async () => {
    const datas = await GetAllProjectUserService();

    return (
        <div className="w-full h-full px-2 py-28 lg:px-7 flex flex-col gap-10 bg-[#FAFAFA] items-center dark:bg-[#121212] dark:text-white">
            <div className="inline-block relative">
                <h2 className="font-bold text-2xl lg:text-3xl tracking-wider">
                    PROJECTS
                </h2>
                <div className="absolute -bottom-5 left-[50%] -translate-x-[50%] w-[20%] h-[5px] bg-violet-500"></div>
            </div>
            <div>
                <p className="lg:text-2xl text-center">
                    Here you will find all of the personal and clients projects
                    that I created with each project containing its own case
                    study
                </p>
            </div>
            <div className="w-[75%] mt-9 space-y-8 overflow-hidden">
                {datas.length > 0 ? (
                    datas.map((data, i) => (
                        <div
                            className="flex flex-col lg:flex-row items-center justify-center w-full gap-10"
                            key={i}
                        >
                            <Card
                                image={data.image}
                                title={data.name}
                                description={data.overview}
                                link={`/testname/projects/${data._id}`}
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
            </div>
        </div>
    );
};

export default ProjectPage;
