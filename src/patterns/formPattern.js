import { errorOptions } from "./errorOptions";
// bisa tambah styling di patterns

export const formPattern = [
    {
        jenisInputan: "input",
        type: "text",
        name: "name",
        title: "Name",
        placeholder: "Name",
        addOptionError: errorOptions.name,
        labelStyle: "text-lg font-bold",
        inputStyle:
            "border-4 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-5",
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "email",
        name: "email",
        title: "Email",
        placeholder: "Email",
        addOptionError: errorOptions.email,
        labelStyle: "text-lg font-bold",
        inputStyle:
            "border-4 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-5",

        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "textarea",
        name: "message",
        title: "Message",
        placeholder: "Message",
        addOptionError: errorOptions.message,
        labelStyle: "text-lg font-bold",
        inputStyle:
            "border-4 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-5 h-40",

        grid: 12,
    },
];
