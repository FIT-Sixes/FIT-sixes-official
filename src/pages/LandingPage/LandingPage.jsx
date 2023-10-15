// local imports
import { Countdown, Hero, Intro, Awards, Sponsors } from "../../components";

const SECTION_STYLE = "flex items-center justify-center min-h-screen";

const LandingPage = () => {
    return (
        <div>
            {/* example sections */}
            
            <section id='hero' className={`min-h-screen`}>
                <Hero />
            </section>

            <section id='countdown' className={`${SECTION_STYLE}`}>
                <Countdown />
            </section>

            <section id='intro' className={`min-h-screen`}>
                <Intro />
            </section>

            <section id='awards' className={`min-h-screen`}>
                <Awards />
            </section>

            <section id='teams' className={`${SECTION_STYLE} text-2xl font-bold text-white`}>
                Teams Section
            </section>

            <section id='sponsors' className={`min-h-screen`}>
                <Sponsors />
            </section>            
        </div>
    );
};

export default LandingPage;
