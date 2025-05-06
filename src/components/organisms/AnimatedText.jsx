import { motion } from "motion/react";

const AnimatedText = ({ children, className, delay = 0, type = "heading" }) => {
    const textVariants = {
        hidden: {
            opacity: 0,
            y: type === "heading" ? 20 : 10,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedText;
