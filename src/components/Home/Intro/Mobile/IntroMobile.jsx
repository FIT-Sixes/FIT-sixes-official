import StatSection from './StatSection';

export default function IntroMobile() {
    return (
        <div className="block md:hidden bg-blue-800">
            <div className="text-white text-4xl inline-flex m-5 flex-col">
                <h1>The Annual Cricket Fiesta</h1>
                <div className="inline-block mt-4 ">
                    <span className="text-blue-500 rounded-md bg-white">
                        By FIT
                    </span>
                </div>
                <p className="text-xl m-4">
                    Welcome to the official website of FIT SIXES, the annual
                    six-a-side cricket tournament of the Faculty of Information
                    Technology of University of Moratuwa. FIT SIXES is a
                    friendly rivalry of cricket among the squads of
                    undergraduates of the faculty and the industry giants,
                    underpinning a numerous mini-games, fun activities and an
                    afterparty celebration. Upholding the traditions of the
                    faculty from generation to generation, it is organized to
                    strengthen the alliance between the undergraduates and the
                    invited industry partners.
                </p>
            </div>
            <StatSection />
        </div>
    );
}
