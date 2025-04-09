"use client";

import { useState } from "react";

export const useGlobalHooks = () => {
    const [loadingButton, setLoadingButton] = useState(false);
    const [error, setError] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [hostname, setHostname] = useState("");

    return {
        hamburger,
        setHamburger,
        error,
        setError,
        loadingButton,
        setLoadingButton,
        hostname,
        setHostname,
    };
};
