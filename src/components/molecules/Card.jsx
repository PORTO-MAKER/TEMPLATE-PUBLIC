import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, description, link }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateX: -100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
                className="flex-1 rounded overflow-hidden h-40 w-full lg:h-80"
            >
                <div className="relative w-full h-40 lg:h-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                transition={{ duration: 0.5 }}
                className="flex-1 space-y-6"
            >
                <h5 className="font-bold text-2xl">{title}</h5>
                <p>{description}</p>
                <div className="bg-violet-500 w-40 h-12 hover:bg-violet-500/80 lg:text-xl font-bold rounded-lg text-white">
                    <Link
                        href={link}
                        className="w-full h-full flex items-center justify-center"
                    >
                        SEE DETAILS
                    </Link>
                </div>
            </motion.div>
        </>
    );
};

export default Card;
