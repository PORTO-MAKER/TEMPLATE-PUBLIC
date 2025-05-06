"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export const useGlobalHooks = () => {
    const [loadingButton, setLoadingButton] = useState(false);
    const [error, setError] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [hostname, setHostname] = useState("");
    const pathname = usePathname();

    return {
        hamburger,
        setHamburger,
        error,
        setError,
        loadingButton,
        setLoadingButton,
        hostname,
        setHostname,
        pathname,
    };
};
