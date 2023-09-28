import StatSection from './StatSection';
import IntroTextSection from './IntroTextSection';

export default function Intro() {
    return (
        <div className="h-screen relative bg-[url('/src/assets/intro_bg.png')] bg-cover bg-right">
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
                        <IntroTextSection />
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
