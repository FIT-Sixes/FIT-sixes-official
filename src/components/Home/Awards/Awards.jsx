import { useState, useEffect } from 'react';
import AwardTile from './AwardTile';
import championTrophy from '../../../assets/gold.png';
import runnersUpTrophy from '../../../assets/silver.png';
import PotTrophy from '../../../assets/bronze.png';

export default function Awards() {
    const awards = [
        {
            img: runnersUpTrophy,
            alt: 'runners-up trophy',
            text: 'Runners-up',
            imgClasses: 'h-[260px]',
        },
        {
            img: championTrophy,
            alt: 'champions trophy',
            text: 'Champions',
            imgClasses: 'h-[300px]',
        },
        {
            img: PotTrophy,
            alt: 'Player of the tournament trophy',
            text: 'Player of the tournament',
            imgClasses: 'h-[250px]',
        },
    ];

    return (
        <div className="relative">
            <div className="flex flex-col justify-center items-center md:absolute md:top-[14vh] md:left-[25vw] z-0">
                <span className="text-[10vw] font-serif font-[800] text-cyan-400 opacity-20 z-0 tracking-wider">
                    AWARDS
                </span>
                <span className="text-[4vw] hidden md:inline  text-white font-bold absolute top-12 left-[17vw]">
                    AWARDS
                </span>
            </div>

            {/* desktop view  */}
            <div className=" hidden md:flex mr-10 justify-center relative items-center h-screen z-1">
                {awards.map((award, i) => (
                    <AwardTile
                        key={i}
                        img={award.img}
                        alt={award.alt}
                        text={award.text}
                        imgClasses={award.imgClasses}
                    />
                ))}
            </div>

            {/* mobile view  */}
            <div className="md:hidden  justify-center relative items-center h-full  z-1 flex flex-col gap-10">
                {/* First Row */}
                <div className="col-span-2 flex justify-center">
                    <AwardTile
                        img={awards[1].img}
                        alt={awards[1].alt}
                        text={awards[1].text}
                        imgClasses={awards[1].imgClasses}
                    />
                </div>

                {/* Second Row */}
                <div className="flex justify-center gap-10">
                    <AwardTile
                        img={awards[0].img}
                        alt={awards[0].alt}
                        text={awards[0].text}
                        imgClasses={awards[0].imgClasses}
                    />
                    <AwardTile
                        img={awards[2].img}
                        alt={awards[2].alt}
                        text={awards[2].text}
                        imgClasses={awards[2].imgClasses}
                    />
                </div>
            </div>
        </div>
    );
}
