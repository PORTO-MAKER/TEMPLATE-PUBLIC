import { Navbar, Footer } from "../organisms";
import { UserAccountService } from "@/services";

const Layout = async ({ children }) => {
    const datas = await UserAccountService();

    return (
        <div className="w-full min-h-svh">
            <Navbar datas={datas} />
            {children}
            <Footer datas={datas} />
        </div>
    );
};

export default Layout;
