import { GET_DATA } from "../api";
import { redirect } from "next/navigation";

export const GetNameUserService = async (hostname) => {
    try {
        const response = await GET_DATA(`proxy?serverName=${hostname}`);
        return response.data.username;
    } catch (err) {
        redirect("https://www.portoku.live/404");
    }
};
