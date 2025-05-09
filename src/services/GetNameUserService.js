import { GET_DATA } from "../api";

export const GetNameUserService = async (hostname) => {
    try {
        const response = await GET_DATA(`proxy?serverName=${hostname}`);
        return response.data.username;
    } catch (err) {
        console.log(err);
    }
};
