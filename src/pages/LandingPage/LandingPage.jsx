// local imports
import { Countdown, Hero, Intro, Awards, Sponsors } from "../../components";

const LandingPage = () => {
    return (
        <div>
            {/* example sections */}
            
            <section id='hero' className="h-screen">
                <Hero />
            </section>

            <section id='countdown' className="h-screen">
                <Countdown />
            </section>

            <section id='intro' className="h-screen">
                <Intro />
            </section>

            <section id='awards' className="h-screen">
                <Awards />
            </section>

            <section id='teams' className="flex items-center justify-center h-screen text-2xl font-bold text-white">
                Teams Section
            </section>

            <section id='sponsors' className="h-screen">
                <Sponsors />
            </section>            
        </div>
    );
};

export default LandingPage;
