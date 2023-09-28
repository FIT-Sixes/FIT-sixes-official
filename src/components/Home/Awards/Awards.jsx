import AwardTile from './AwardTile';
import championTrophy from '../../../assets/gold.png';
import runnersUpTrophy from '../../../assets/silver.png';
import PotTrophy from '../../../assets/bronze.png';

export default function Awards() {
    return (
        <div className="h-screen bg-blue-800 relative">
            <div className='flex flex-col absolute top-[12vh] left-[24vw] z-0'>
                <span className='text-[10rem] font-serif font-[800] text-cyan-400 opacity-20 z-0 tracking-wider'>AWARDS</span>
                <span className="text-6xl  text-white font-bold absolute top-12 left-[17vw]">AWARDS</span>
            </div>
            <div className='flex justify-center relative items-center h-full z-1'>
                <AwardTile
                    img={runnersUpTrophy}
                    alt="runners-up trophy"
                    text="Runners-up"
                    imgClasses="h-[250px]"
                />
                <AwardTile
                    img={championTrophy}
                    alt="champions trophy"
                    text="Champions"
                    imgClasses="h-[280px] relative z-2"
                />
                <AwardTile
                    img={PotTrophy}
                    alt="Player of the tournament trophy"
                    text="Player of the tournament"
                    imgClasses="h-[250px] relative z-0"
                />
            </div>
        </div>
    );
}
