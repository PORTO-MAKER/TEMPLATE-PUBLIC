export const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
};

export const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    show: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.3,
        },
    },
};

export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200,
        },
    },
};

export const pageTransition = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.3,
        },
    },
};

export const slideInLeft = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 30,
            stiffness: 200,
        },
    },
};

export const slideInRight = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 30,
            stiffness: 200,
        },
    },
};

export const popAnimation = {
    hidden: {
        scale: 0.8,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 300,
        },
    },
    tap: {
        scale: 0.95,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 300,
        },
    },
    hover: {
        scale: 1.05,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 300,
        },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const rotateAnimation = {
    hidden: {
        rotate: -5,
        opacity: 0,
    },
    show: {
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 200,
        },
    },
    hover: {
        rotate: [0, -2, 2, -2, 0],
        transition: {
            duration: 0.5,
        },
    },
};

export const bounceAnimation = {
    hidden: {
        y: 0,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 100,
        },
    },
    bounce: {
        y: [0, -15, 0],
        transition: {
            duration: 0.6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            repeatDelay: 3,
        },
    },
};

export const drawPathAnimation = {
    hidden: {
        pathLength: 0,
        opacity: 0,
    },
    show: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: {
                type: "spring",
                duration: 1.5,
                bounce: 0,
            },
            opacity: {
                duration: 0.5,
            },
        },
    },
};
