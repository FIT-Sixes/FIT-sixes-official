import { useState } from 'react';
import AwardTile from './AwardTile';
import championTrophy from '../../../assets/gold.png';
import runnersUpTrophy from '../../../assets/silver.png';
import PotTrophy from '../../../assets/bronze.png';

export default function Awards() {
    const [currentAward, setCurrentAward] = useState(0);
    const awards = [
        {
            img: runnersUpTrophy,
            alt: "runners-up trophy",
            text: "Runners-up",
            imgClasses: "h-[260px]",
        },
        {
            img: championTrophy,
            alt: "champions trophy",
            text: "Champions",
            imgClasses: "h-[300px]",
        },
        {
            img: PotTrophy,
            alt: "Player of the tournament trophy",
            text: "Player of the tournament",
            imgClasses: "h-[250px]",
        },
    ];

    const nextAward = () => {
        setCurrentAward((currentAward + 1) % awards.length);
    };

    const prevAward = () => {
        setCurrentAward((currentAward - 1 + awards.length) % awards.length);
    };

    return (
        <div className="h-screen bg-blue-800 relative">
            <div className='flex flex-col absolute top-[14vh] left-[24vw] z-0'>
                <span className='text-[10vw] font-serif font-[800] text-cyan-400 opacity-20 z-0 tracking-wider'>AWARDS</span>
                <span className="text-[4vw] hidden md:inline  text-white font-bold absolute top-12 left-[17vw]">AWARDS</span>
            </div>
            <div className=' hidden md:flex  justify-center relative items-center h-full z-1'>
                {awards.map((award,i)=>(
                    <AwardTile
                    key={i}
                    img={award.img}
                    alt={award.alt}
                    text={award.text}
                    imgClasses={award.imgClasses}
                />
                ))}
            </div>
            <div className='flex md:hidden  justify-center relative items-center h-full z-1'>
            <button
                    className="absolute left-12 bg-white text-blue-800 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
                    onClick={prevAward}
                >
                    &lt;
                </button>
                <AwardTile
                    img={awards[currentAward].img}
                    alt={awards[currentAward].alt}
                    text={awards[currentAward].text}
                    imgClasses={awards[currentAward].imgClasses}
                />
                <button
                    className="absolute right-12 bg-white text-blue-800 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
                    onClick={nextAward}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

