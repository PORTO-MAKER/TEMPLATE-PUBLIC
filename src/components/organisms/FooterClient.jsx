import { FaCopyright } from "react-icons/fa";
import Link from "next/link";
import { socmedPattern } from "@/patterns";

const FooterClient = ({ account }) => {
    return (
        <div className="h-[363px] bg-white flex dark:bg-black items-center justify-center dark:text-white">
            <div className="w-full lg:w-[60%] flex flex-col">
                <div className="flex justify-between border-b pb-9 px-5">
                    <div className="flex flex-col gap-3">
                        <h5 className="font-semibold text-xl tracking-wider">
                            SAY HELLO
                        </h5>
                        <span>{account.userData.email}</span>
                    </div>
                    <ol className="space-y-3">
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
                                                <column.icon className="w-6 h-6" />
                                            </Link>
                                        </li>
                                    )
                            )}
                    </ol>
                </div>
                <div className="p-5 flex items-center gap-2">
                    <FaCopyright />
                    <p>portoku 2024</p>
                </div>
            </div>
        </div>
    );
};

export default FooterClient;
