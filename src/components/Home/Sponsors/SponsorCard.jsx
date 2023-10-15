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
        <div className="flex flex-col items-center mx-2 mb-10 md:my-0">
            <div
                className={`md:h-[19vh] md:w-[22vw] h-[20vh] w-[50vw]  bg-white flex rounded-3xl md:rounded-l-[100px] md:rounded-r-3xl 
       ${!sponsors && 'backdrop-blur-lg bg-opacity-40'}
       ${logoClass}`}
            >
                <img src={logoImg} alt={text} className="  md:block hidden w-[8vw] h-[19vh] " />
                {sponsors?.length > 0 ? (
                    <AnimatePresence>
                        <motion.img
                            key={currentSponsorIndex}
                            src={sponsors[currentSponsorIndex]}
                            alt={text}
                            className={`object-contain md:w-[12vw] w-[25vw] m-auto ${sponsorClass}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    </AnimatePresence>
                ) : (
                    <span className="flex m-auto text-xl text-white ">
                        Introducing Soon
                    </span>
                )}
            </div>
            <span className="my-2 text-xl text-white md:mt-4 md:ml-10 ">{text}</span>
        </div>
    );
}
