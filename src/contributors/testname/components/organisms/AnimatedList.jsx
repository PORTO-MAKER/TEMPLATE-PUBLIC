import { motion } from "motion/react";
import { staggerContainer } from "@/contributors/testname/utils";

const AnimatedList = ({ children, className, delay = 0 }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedList;
