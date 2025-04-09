import { Navbar, Footer } from "../organisms";
import { headers } from "next/headers";

const Layout = async ({ children }) => {
    const headersList = await headers();
    const host = headersList.get("host");
    return (
        <div className="w-full min-h-svh">
            <Navbar host={host} />
            {children}
            <Footer host={host} />
        </div>
    );
};

export default Layout;
