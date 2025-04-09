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
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "email",
        name: "email",
        title: "Email",
        placeholder: "Email",
        addOptionError: errorOptions.email,
        grid: 12,
    },
    {
        jenisInputan: "input",
        type: "textarea",
        name: "message",
        title: "Message",
        placeholder: "Message",
        addOptionError: errorOptions.message,
        grid: 12,
    },
];
