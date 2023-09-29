import SponsorCard from './SponsorCard';
import GoldSponsor from '../../../assets/Gold Sponsor.png';
import PlatinumSponsor from '../../../assets/Platinum Sponsor.png';
import SilverSponsor from '../../../assets/Silver Sponsor.png';
import Cambio from '../../../assets/Cambio.png';

export default function Sponsors() {
    return (
        <div className="h-screen bg-blue-800 relative">
            <div className="flex flex-col absolute top-[15vh] left-[18vw] z-0">
                <span className="text-[10vw] font-serif font-[800] text-cyan-400 opacity-20 z-0 tracking-wider">
                    SPONSORS
                </span>
                <span className="text-[4vw]  text-white font-bold absolute top-12 left-[22vw]">
                    SPONSORS
                </span>
            </div>
            <div className="flex justify-center relative items-center h-full z-1">
                <SponsorCard logoImg={GoldSponsor} text="Gold Sponsor" />
                <SponsorCard
                    logoImg={PlatinumSponsor}
                    text="Platinum Sponsor"
                    sponsors={[Cambio]}
                />
                <SponsorCard logoImg={SilverSponsor} text="Silver Sponsor" />
            </div>
        </div>
    );
}
