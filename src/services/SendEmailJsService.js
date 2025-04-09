import { AlertForm } from "@/components/atoms";
import { POST_DATA } from "../api";

export const SendEmailJsService = async (data, reset, setLoading, username) => {
    try {
        setLoading(true);
        const response = await POST_DATA(
            `visitor/${username}/send-email`,
            data
        );
        reset();
        AlertForm({
            title: "Success",
            text: response.data.message,
            icon: "success",
        });
    } catch (err) {
        AlertForm({
            icon: "error",
            text: err.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};
