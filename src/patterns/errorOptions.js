export const errorOptions = {
    email: {
        required: "Email is required",
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email",
        },
    },
    name: {
        required: "Name is required",
    },
    message: {
        required: "Message is required",
    },
};
