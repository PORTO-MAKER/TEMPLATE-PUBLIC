import { HomeClientOne, HomeClientTwo } from "@/components/templates";
import { getUser } from "@/utils";
import { headers } from "next/headers";

const number = 2;

const Home = async () => {
    const headersList = await headers();
    const host = headersList.get("host");

    const datas = await getUser(host);

    return number === 1 ? (
        <HomeClientOne account={datas} />
    ) : (
        <HomeClientTwo account={datas} />
    );
};

export default Home;
