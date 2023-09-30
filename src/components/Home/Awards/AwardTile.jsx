import { motion } from 'framer-motion';

export default function AwardTile({
    img,
    alt,
    text,
    className,
    imgClasses,
    textClasses,
}) {
    return (
        <div>
            <div
                className={`md:flex hidden flex-col items-center -mx-7  ${className}`}
            >
                <motion.div
                    whileHover={{ filter: 'brightness(1.2)' }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={img}
                        alt={alt}
                        className={`object-contain ${imgClasses}`}
                    />
                </motion.div>
                <span
                    className={`text-center text-white w-[70%] ${textClasses}`}
                >
                    {text}
                </span>
            </div>

            <motion.div
                whileTap={{
                    scale: 0.9,
                    rotate: [0, -5, 5, -5, 5, 0],
                    transition: { duration: 0.3 },
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                    duration: 0.3,
                }}
                className="md:hidden flex flex-col items-center justify-center bg-opacity-30 backdrop-blur-lg  w-[37vw] h-[35vh] rounded-3xl"
            >
                <img
                    src={img}
                    alt={alt}
                    className={`object-contain w-[50%] h-[70%] ${imgClasses}`}
                />
                <span
                    className={`text-white text-xl text-center ${textClasses}`}
                >
                    {text}
                </span>
            </motion.div>
        </div>
    );
}
