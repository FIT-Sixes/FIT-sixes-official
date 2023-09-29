// local imports
import { Countdown } from "../../components";

const LandingPage = () => {
    return (
        <>
            {/* example sections */}
            
            <section className="h-[100vh]"></section>
            <section className="h-[100vh]"></section>
            <section className="h-[100vh]"></section>
            <section className="h-[100vh]"></section>
            <section className="h-[100vh]"></section>

            <section id='countdown' className="h-[100vh]">
                <Countdown />
            </section>
        </>
    );
};

export default LandingPage;
