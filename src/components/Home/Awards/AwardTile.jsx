import { motion } from 'framer-motion';

export default function AwardTile({ img, alt, text, className, imgClasses, textClasses }) {
    return (
        <div className={`flex flex-col items-center -mx-7  ${className}`}>
            <motion.div
                whileHover={{ filter: 'brightness(1.2)' }} 
                transition={{ duration: 0.3 }} 
            >
                <img src={img} alt={alt} className={`object-contain ${imgClasses}`} />
            </motion.div>
            <span className={`text-center text-white w-[70%] ${textClasses}`}>{text}</span>
        </div>
    );
}