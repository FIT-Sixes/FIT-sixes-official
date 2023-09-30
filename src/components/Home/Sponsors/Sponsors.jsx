import SponsorCard from './SponsorCard';
import GoldSponsor from '../../../assets/Gold Sponsor.png';
import PlatinumSponsor from '../../../assets/Platinum Sponsor.png';
import SilverSponsor from '../../../assets/Silver Sponsor.png';
import Cambio from '../../../assets/Cambio.png';
import fitMoments from '../../../assets/fit moments.png';

export default function Sponsors() {
    return (
        <div className="md:h-screen flex flex-col  items-center justify-center  relative">
            <div className="flex flex-col md:absolute md:top-[10vh] md:left-[18vw] text-center mb-6 md:mt-0  z-0">
                <span className="text-[10vw] font-serif font-[800] text-cyan-400 opacity-20 z-0 tracking-wider">
                    SPONSORS
                </span>
                <span className="hidden md:inline text-[4vw]  text-white font-bold absolute top-12 left-[22vw]">
                    SPONSORS
                </span>
            </div>
            <div className="md:flex block  justify-center relative items-center md:mt-32 md:mb-0 mb-10  z-1">
                <SponsorCard logoImg={GoldSponsor} text="Gold Sponsor" />
                <SponsorCard
                    logoImg={PlatinumSponsor}
                    text="Platinum Sponsor"
                    sponsors={[Cambio,Cambio]}
                />
                <SponsorCard logoImg={SilverSponsor} text="Silver Sponsor" />
            </div>
            <div className='md:mt-20 -mt-12 flex flex-col justify-center items-center gap-4 '>
                <img
                    src={fitMoments}
                    alt="media partner"
                    className="md:w-full w-[70vw]"
                />
                <span className='text-white text-xl '>Official Media Partner</span>
            </div>
        </div>
    );
}
