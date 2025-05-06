import { getUser } from "@/utils";
import { Navbar, Footer } from "../organisms";
import { headers } from "next/headers";

const Layout = async ({ children }) => {
    const headersList = await headers();
    const host = headersList.get("host");
    const datas = await getUser(host);

    return (
        <div className="w-full min-h-svh">
            <Navbar datas={datas} />
            {children}
            <Footer datas={datas} />
        </div>
    );
};

export default Layout;
