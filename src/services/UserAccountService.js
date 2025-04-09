import { GET_DATA } from "../api";
import { redirect } from "next/navigation";

export const UserAccountService = async (username) => {
    try {
        const response = await GET_DATA(`visitor/${username}`);
        return response.data.data;
    } catch (err) {
        redirect("https://www.portoku.live/404");
    }
};
