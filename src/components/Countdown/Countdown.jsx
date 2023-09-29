import { useCallback, useEffect, useState } from "react";
import {AnimatePresence, motion} from "framer-motion"

const Countdown = () => {
    const [countDownTime, setCountDownTIme] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const [timeCountingSeconds, setTimeCountingSeconds] = useState({});
    const [timeCountingMinutes, setTimeCountingMinutes] = useState(false);

    /**
     * take the time difference of the end date and the current date
     * @param countDownTime
     */
    const getTimeDifference = (countDownTime) => {
        const currentTime = new Date().getTime();
        const timeDiffrence = countDownTime - currentTime;
        let days =
            Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
                ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
                : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
        const hours =
            Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
            10
                ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
                : `0${Math.floor(
                    (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                )}`;
        const minutes =
            Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
                ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
                : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
        const seconds =
            Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
                ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
                : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
        if (timeDiffrence < 0) {
            setCountDownTIme({
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            });
            // clearInterval();
        } else {
            setCountDownTIme({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });
        }
    };

    /**
     *
     * @type {(function(): void)|*}
     */
    const startCountDown = useCallback(() => {
        const customDate = new Date(2023, 9, 21);

        const countDownDate = new Date(
            customDate.getFullYear(),
            customDate.getMonth(),
            customDate.getDate(),
            customDate.getHours(),
            customDate.getMinutes(),
            customDate.getSeconds()
        );
        setInterval(() => {
            getTimeDifference(countDownDate.getTime());
        }, 1000);
    }, []);

    useEffect(() => {
        startCountDown();
    }, [startCountDown]);

    useEffect(() => {
        console.log("HI")
        setTimeCountingSeconds({
            initial: { y: -25, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            // exit: { opacity: 0, y:15 }, // Define an exit state to reset the animation
            transition: { duration: 1},
        })
    }, [countDownTime.seconds]);

    useEffect(() => {
        console.log("hello")
        setTimeCountingMinutes(true);
    }, [countDownTime.minutes]);

    /**
     * animations
     */
    // timeCountingTime = ;

    const animationKey = Math.random(); // Generate a random key to force a re-mount

    return (
        <div className="bg-[#191A24] h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
                <motion.span
                    className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2"
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    >
                    FIT Sixes starts in...
                </motion.span>
                <div className="flex justify-center gap-3 sm:gap-8">
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-3xl">
                            <span className="lg:text-9xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">{countDownTime?.days}</span>
                            <span className="text-[#8486A9] text-xs sm:text-1xl text-center capitalize">{countDownTime?.days === 1 ? "Day" : "Days"}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-3xl">
                            <span className="lg:text-9xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">{countDownTime?.hours}</span>
                            <span className="text-[#8486A9] text-xs sm:text-1xl text-center capitalize">{countDownTime?.hours === 1 ? "Hour" : "Hours"}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-3xl">
                            <motion.span
                                className="lg:text-9xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]"
                                variants={timeCountingMinutes}
                                key={animationKey}
                                initial="initial"
                                animate="animate"
                                transition="transition"
                            >
                                {countDownTime?.minutes}
                            </motion.span>
                            <motion.span className="text-[#8486A9] text-xs sm:text-1xl text-center capitalize">{countDownTime?.minutes === 1 ? "Minute" : "Minutes"}</motion.span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 relative">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-3xl">
                            {/*<AnimatePresence>*/}
                                <motion.span
                                    className="lg:text-9xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]"
                                    variants={timeCountingSeconds}
                                    key={animationKey}
                                    initial="initial"
                                    animate="animate"
                                    transition="transition"
                                    // exit="exit"
                                >
                                    {countDownTime?.seconds}
                                </motion.span>
                            {/*</AnimatePresence>*/}
                            <span className="text-[#8486A9] text-xs sm:text-1xl text-center capitalize">{countDownTime?.seconds === 1 ? "Second" : "Seconds"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Countdown;