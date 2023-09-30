import { Canvas } from '@react-three/fiber';

// local imports
import Trophy from './Trophy';
import './Hero.css';

const Hero = () => {
    return (
        <div className='flex flex-col items-end min-h-screen text-white hero-background'>
            <Canvas>
                <ambientLight />
                <pointLight position={[0, 0, -1]} />

                <Trophy />
            </Canvas>
            <div className='max-w-[800px] mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#20CDD3]'>
                    FIT SIXES 2K23
                </h1>
                <p className='md:text-base text-xl font-weight: 600 text-[FFFFFF]'>
                    {"It's time to practice!!! Be ready to witness the Sri Lanka's biggest\
                    6-A-side University Cricket Tournament where IT undergraduates and\
                    IT professionals collide in an epic battle!"}
                </p>
                <button className='bg-[#07334E] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>
                    TEAM REGISTRATION
                </button>
            </div>
        </div>

    );
};

export default Hero;
