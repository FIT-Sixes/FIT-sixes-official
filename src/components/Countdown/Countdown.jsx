import { useCallback, useEffect, useState } from "react";

const Countdown = () => {
    const [countDownTime, setCountDownTIme] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    /**
     * take the time difference of the end date and the current date
     * @param countDownTime
     */
    const getTimeDifference = (countDownTime) => {
        const currentTime = new Date().getTime();
        // console.log(currentTime);

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
        // const customDate = eastern.toLocaleString("en-US", {timeZone: "America/New_York"});

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

    return (
        <div className="h-screen">
            <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
                <span className="px-2 text-2xl font-semibold tracking-widest text-center text-white sm:text-3xl">FIT Sixes starts in...</span>
                <div className="flex justify-center gap-3 sm:gap-8">
                    <div className="relative flex flex-col gap-5">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-3xl">
                            <span className="lg:text-9xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">{countDownTime?.days}</span>
                            <span className="text-[#8486A9] text-xs sm:text-1xl text-center capitalize">{countDownTime?.days == 1 ? "Day" : "Days"}</span>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-5">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-3xl">
                            <span className="lg:text-9xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">{countDownTime?.hours}</span>
                            <span className="text-[#8486A9] text-xs sm:text-1xl text-center capitalize">{countDownTime?.hours == 1 ? "Hour" : "Hours"}</span>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-5">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-3xl">
                            <p className="lg:text-9xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">{countDownTime?.minutes}</p>
                            <p className="text-[#8486A9] text-xs sm:text-1xl text-center capitalize">{countDownTime?.minutes == 1 ? "Minute" : "Minutes"}</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-5">
                        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex flex-col items-center justify-center bg-[#343650] rounded-3xl">
                            <span className="lg:text-9xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">{countDownTime?.seconds}</span>
                            <span className="text-[#8486A9] text-xs sm:text-1xl text-center capitalize">{countDownTime?.seconds == 1 ? "Second" : "Seconds"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
