import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SponsorCard({
    logoImg,
    text,
    logoClass,
    sponsors,
    sponsorClass,
}) {
    const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0);

    useEffect(() => {
        if (sponsors?.length > 1) {
            const interval = setInterval(() => {
                setCurrentSponsorIndex((prevIndex) =>
                    (prevIndex + 1) % sponsors.length
                );
            }, 2000); 
            return () => clearInterval(interval);
        }
    }, [sponsors]);

    return (
        <div className="mx-2 flex flex-col items-center">
            <div
                className={`bg-white h-[19vh] w-[22vw]  flex rounded-l-[100px] rounded-r-3xl 
       ${!sponsors && 'backdrop-blur-lg bg-opacity-40'}
       ${logoClass}`}
            >
                <img src={logoImg} alt={text} className="w-[8vw] h-[19vh]" />
                {sponsors?.length > 0 ? (
                    <AnimatePresence>
                        <motion.img
                            key={currentSponsorIndex}
                            src={sponsors[currentSponsorIndex]}
                            alt={text}
                            className={`object-contain w-[12vw] m-auto ${sponsorClass}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    </AnimatePresence>
                ) : (
                    <span className=" m-auto flex text-white text-[1.5vw]">
                        Introducing Soon
                    </span>
                )}
            </div>
            <span className="mt-4 ml-10 text-xl text-white ">{text}</span>
        </div>
    );
}
