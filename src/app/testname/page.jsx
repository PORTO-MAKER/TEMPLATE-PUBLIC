import { UserAccountService } from "@/services";
import { HomeClientOne } from "@/templates/testname/components/templates";

const Home = async () => {
    const datas = await UserAccountService();

    return <HomeClientOne account={datas} />;
};

export default Home;
