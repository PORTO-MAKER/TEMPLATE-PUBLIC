import { GET_DATA } from "../api";
import { AlertForm } from "@/components/atoms";
import { notFound } from "next/navigation";

export const GetAllProjectUserService = async (username) => {
    try {
        const response = await GET_DATA(`visitor/${username}/projects`);

        return response.data.data.userProjectData;
    } catch (err) {
        AlertForm({
            icon: "error",
            text: err.response.data.message,
            title: "failed",
        });
    }
};

export const GetDetailsProjectUserService = async (username, id) => {
    try {
        const response = await GET_DATA(`visitor/${username}/projects/${id}`);
        return response.data.data;
    } catch (err) {
        notFound();
    }
};
