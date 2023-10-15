import SponsorCard from './SponsorCard';
import GoldSponsor from '../../../assets/Gold Sponsor.png';
import PlatinumSponsor from '../../../assets/Platinum Sponsor.png';
import SilverSponsor from '../../../assets/Silver Sponsor.png';
import Cambio from '../../../assets/Cambio.png';
import fitMoments from '../../../assets/fit moments.png';

export default function Sponsors() {
    return (
        <div className="relative flex flex-col items-center justify-center md:h-screen">
            <div className="flex flex-col md:absolute md:top-[10vh] md:left-[18vw] text-center mb-6 md:mt-0  z-0">
                <span className="text-[10vw] font-serif font-[800] text-cyan-400 opacity-20 z-0 tracking-wider">
                    SPONSORS
                </span>
                <span className="hidden md:inline text-[4vw]  text-white font-bold absolute top-12 left-[22vw]">
                    SPONSORS
                </span>
            </div>
            <div className="relative items-center justify-center block mb-10 md:flex md:mt-32 md:mb-0 z-1">
                <SponsorCard logoImg={GoldSponsor} text="Gold Sponsor" />
                <SponsorCard
                    logoImg={PlatinumSponsor}
                    text="Platinum Sponsor"
                    sponsors={[Cambio, Cambio]}
                />
                <SponsorCard logoImg={SilverSponsor} text="Silver Sponsor" />
            </div>
            <div className='flex flex-col items-center justify-center gap-4 mt-12 md:mt-20 '>
                <img
                    src={fitMoments}
                    alt="media partner"
                    className="md:w-full w-[70vw]"
                />
                <span className='text-xl text-white '>Official Media Partner</span>
            </div>
        </div>
    );
}
