import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3100 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        motionValue.set(value);
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

export default function Stat({ value, text, className }) {
    return (
        <div
            className={`flex flex-col text-white font-semibold absolute 
             bg-cover bg-left-bottom bg-no-repeat  ${className}`}
            style={{ backgroundImage: `url('/src/assets/stat_bg.png')` }}
        >
            <span className="ml-3">
                <AnimatedNumbers value={value} />+
            </span>
            <span className={`text-[40%] -mt-3  ml-3`}>{text}</span>
        </div>
    );
}


export function StatMV({value, text, className}) {
    return (
        <div className='w-[37vw] h-[15vh] rounded-xl  mb-8 mx-4 flex items-center justify-center
        bg-cover bg-left-bottom bg-no-repeat '
            style={{ backgroundImage: `url('/src/assets/stat_bg.png')` }}>
            <div className='flex flex-col text-white text-4xl justify-center items-center'>
                <span><AnimatedNumbers value={value} />+</span>
                <span className='mb-1'>{text}</span>
            </div>
        </div>
    );
}





