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

    return <span ref={ref} className=""></span>;
};

export default function Stat({ value, text, textSize, className }) {
    return (
        <div
            className={`grid text-[${textSize}] text-white font-semibold absolute 
            border-l border-b border-blue-800  ${className}`}
        >
            <span className="mx-1 -my-5">
                <AnimatedNumbers value={value} />+
            </span>
            <span className={`text-[40%] mx-1 my-0`}>{text}</span>
        </div>
    );
}
