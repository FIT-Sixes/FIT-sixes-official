import StatSection from './StatSection';

export default function IntroDesk() {
    return (
        <div className="h-screen hidden md:block relative bg-[url('/src/assets/intro_bg.png')] bg-cover bg-right">
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background:
                        'linear-gradient(180deg, #07334E 3.65%, #151632 20.31%, #151632 100%)',
                }}
            ></div>
            <div className="text-white grid grid-cols-12">
                <div className="col-span-1"></div>
                <div className="col-span-10 grid grid-cols-10 relative">
                    {/* left section  */}
                    <div className="col-span-7 my-14 ">
                        <div>
                            <div className="text-5xl">
                                <h1>The Annual Cricket Fiesta </h1>
                                <h1 className="text-blue-500 mt-2">By FIT</h1>
                            </div>
                            <p className=" text-[1.2vw] my-8 w-[26vw]">
                                Welcome to the official website of FIT SIXES,
                                the annual six-a-side cricket tournament of the
                                Faculty of Information Technology of University
                                of Moratuwa. FIT SIXES is a friendly rivalry of
                                cricket among the squads of undergraduates of
                                the faculty and the industry giants,
                                underpinning a numerous mini-games, fun
                                activities and an afterparty celebration.
                                Upholding the traditions of the faculty from
                                generation to generation, it is organized to
                                strengthen the alliance between the
                                undergraduates and the invited industry
                                partners.
                            </p>
                        </div>
                    </div>

                    {/* right section  */}
                    <div className="relative h-[100%] col-span-3">
                        <StatSection />
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    );
}
