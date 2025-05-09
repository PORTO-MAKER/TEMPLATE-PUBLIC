import { motion } from "motion/react";
import { fadeUp } from "@/contributors/testname/utils";

const AnimatedSection = ({ children, className, delay = 0 }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;
