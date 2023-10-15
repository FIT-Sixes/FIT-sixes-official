import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion"

const Countdown = () => {
    const [countDownTime, setCountDownTIme] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const [timeCountingSeconds, setTimeCountingSeconds] = useState({});
    const [timeCountingMinutes, setTimeCountingMinutes] = useState(false);
    const [timeCountingHours, setTimeCountingHours] = useState(false);
    const [timeCountingDays, setTimeCountingDays] = useState(false);

    /**
     * take the time difference of the end date and the current date
     * @param countDownTime
     */
    const getTimeDifference = (countDownTime) => {
        const currentTime = new Date().getTime();

        const timeDifference = countDownTime - currentTime;

        let days =
            Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
                ? Math.floor(timeDifference / (24 * 60 * 60 * 1000))
                : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;
        const hours =
            Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
                10
                ? Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
                : `0${Math.floor(
                    (timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
                )}`;
        const minutes =
            Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
                ? Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
                : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
        const seconds =
            Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
                ? Math.floor((timeDifference % (60 * 1000)) / 1000)
                : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;
        if (timeDifference < 0) {
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
        setTimeCountingMinutes(false);
        setTimeCountingHours(false);
        setTimeCountingDays(false);
        setTimeCountingSeconds({
            initial: { y: -20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            // exit: { opacity: 0, y:15 }, // Define an exit state to reset the animation
            transition: { duration: 1 },
        })
    }, [countDownTime.seconds]);

    useEffect(() => {
        setTimeCountingMinutes(true);
    }, [countDownTime.minutes]);

    useEffect(() => {
        setTimeCountingHours(true);
    }, [countDownTime.hours]);

    useEffect(() => {
        setTimeCountingHours(true);
    }, [countDownTime.days]);

    const animationKey = Math.random(); // Generate a random key to force a re-mount

    return (
        /* whole container */
        <div className="">
            {/*whole container 2*/}
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">

                {/* title */}
                <motion.span
                    className="px-2 text-2xl font-semibold tracking-widest text-center text-white sm:text-3xl"
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    FIT Sixes starts in...
                </motion.span>

                {/* Countdown timer */}
                <div className="flex flex-col justify-center gap-3 lg:flex-row sm:flex-row sm:gap-8">

                    {/* 1st box */}
                    <div className="relative flex gap-5">
                        <div className="h-40 w-40 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-xl lg:rounded-3xl border-2 border-cyan-400 backdrop-filter backdrop-blur-sm bg-opacity-20">
                            {(timeCountingDays) ? <motion.span
                                className="lg:text-9xl sm:text-6xl text-9xl font-semibold text-[#FFFFFF] border-cyan-400"
                                variants={timeCountingSeconds}
                                key={animationKey}
                                initial="initial"
                                animate="animate"
                                transition="transition"
                            >
                                {countDownTime?.days}
                            </motion.span>
                                : <span className="lg:text-9xl sm:text-6xl text-9xl font-semibold text-[#FFFFFF] border-cyan-400">
                                    {countDownTime?.days}
                                </span>
                            }
                            <span className="text-[#FFFFFF] text-xs sm:text-1xl text-center capitalize">{countDownTime?.days === 1 ? "Day" : "Days"}</span>
                        </div>
                    </div>

                    {/* 2nd box */}
                    <div className="relative flex flex-col gap-5">
                        <div className="h-40 w-40 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-xl lg:rounded-3xl border-2 border-cyan-400 backdrop-filter backdrop-blur-sm bg-opacity-20">
                            {(timeCountingHours) ? <motion.span
                                className="lg:text-9xl sm:text-6xl text-9xl font-semibold text-[#FFFFFF] border-cyan-400"
                                variants={timeCountingSeconds}
                                key={animationKey}
                                initial="initial"
                                animate="animate"
                                transition="transition"
                            >
                                {countDownTime?.hours}
                            </motion.span>
                                : <span className="lg:text-9xl sm:text-6xl text-9xl font-semibold text-[#FFFFFF] border-cyan-400">
                                    {countDownTime?.hours}
                                </span>
                            }
                            <span className="text-[#FFFFFF] text-xs sm:text-1xl text-center capitalize">{countDownTime?.hours === 1 ? "Hour" : "Hours"}</span>
                        </div>
                    </div>

                    {/* 3rd box */}
                    <div className="relative flex flex-col gap-5">
                        <div className="h-40 w-40 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-xl lg:rounded-3xl border-2 border-cyan-400 backdrop-filter backdrop-blur-sm bg-opacity-20">
                            {(timeCountingMinutes) ? <motion.span
                                className="lg:text-9xl sm:text-6xl text-9xl font-semibold text-[#FFFFFF] border-cyan-400"
                                variants={timeCountingSeconds}
                                key={animationKey}
                                initial="initial"
                                animate="animate"
                                transition="transition"
                            >
                                {countDownTime?.minutes}
                            </motion.span>
                                : <span className="lg:text-9xl sm:text-6xl text-9xl font-semibold text-[#FFFFFF] border-cyan-400">
                                    {countDownTime?.minutes}
                                </span>
                            }
                            <motion.span className="text-[#FFFFFF] text-xs sm:text-1xl text-center capitalize">{countDownTime?.minutes === 1 ? "Minute" : "Minutes"}</motion.span>
                        </div>
                    </div>

                    {/* 4th box */}
                    <div className="relative flex flex-col ">
                        <div className="h-40 w-40 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-xl lg:rounded-3xl border-2 border-cyan-400 backdrop-filter backdrop-blur-sm bg-opacity-20">
                            <motion.span
                                className="lg:text-9xl sm:text-6xl text-9xl font-semibold text-[#FFFFFF] border-cyan-400"
                                variants={timeCountingSeconds}
                                key={animationKey}
                                initial="initial"
                                animate="animate"
                                transition="transition"
                            >
                                {countDownTime?.seconds}
                            </motion.span>
                            <span className="text-[#FFFFFF] text-xs sm:text-1xl text-center capitalize">{countDownTime?.seconds === 1 ? "Second" : "Seconds"}</span>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Countdown;
