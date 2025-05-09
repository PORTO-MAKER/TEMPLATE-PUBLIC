import { HomeClientOne } from "@/contributors/testname/components/templates";
import { getUser } from "@/contributors/testname/utils";
import { headers } from "next/headers";

const Home = async () => {
    const headersList = await headers();
    const host = headersList.get("host");

    const datas = await getUser(host);

    return <HomeClientOne account={datas} />;
};

export default Home;
