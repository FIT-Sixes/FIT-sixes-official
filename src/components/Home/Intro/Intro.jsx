import StatSection from "./StatSection";

export default function Intro() {
    return (
        <div className="grid grid-cols-12 h-[80vh]">
            <div className="col-span-1"></div>
            <div className="col-span-10 grid grid-cols-10 bg-blue-100">
                <div className="text-center col-span-7">left side</div>
                <div className="relative h-[100%] col-span-3">
                    <StatSection/>
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    );
}
