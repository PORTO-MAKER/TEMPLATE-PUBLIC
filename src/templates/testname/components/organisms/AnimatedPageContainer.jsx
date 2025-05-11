import { pageTransition } from "@/templates/testname/utils";
import { motion } from "motion/react";

const AnimatedPageContainer = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={pageTransition}
            className="min-h-screen bg-white"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPageContainer;
