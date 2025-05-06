import { getUser } from "@/utils";
import { headers } from "next/headers";
import AboutClient from "./AboutClient";

export const metadata = {
    title: "About",
    description:
        "Explore my journey, skills, and passion through a collection of personal and client projects. Each project includes a detailed case study showcasing my creative process and expertise.",
};

const About = async () => {
    const headersList = await headers();
    const host = headersList.get("host");
    const datas = await getUser(host);

    return <AboutClient account={datas} />;
};

export default About;
