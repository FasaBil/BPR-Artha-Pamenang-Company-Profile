import usePageTitle from '../hooks/usePageTitle.js';
import HeroSlider from '../components/home/HeroSlider.jsx';
import CtaBanner from '../components/home/CtaBanner.jsx';
import Values from '../components/home/Values.jsx';
import { Profile, Vmm } from '../components/home/ProfileVmm.jsx';
import Keunggulan from '../components/home/Keunggulan.jsx';
import Products from '../components/home/Products.jsx';
import Pembiayaan from '../components/home/Pembiayaan.jsx';
import ApsUpdate from '../components/home/ApsUpdate.jsx';

// Wrapper .bg-section-N memasang gambar background (bg1/bg2/bg3.webp)
export default function Home() {
    usePageTitle('BPR Syariah Artha Pamenang');

    return (
        <>
            <div className="bg-section-1">
                <HeroSlider />
                <CtaBanner />
            </div>

            <div className="bg-section-2">
                <Values />
            </div>

            <div className="bg-section-3">
                <Profile />
                <Vmm />
            </div>

            <div className="bg-section-2">
                <Keunggulan />
            </div>

            <div className="bg-section-3">
                <Products />
            </div>

            <div className="bg-section-2">
                <Pembiayaan />
            </div>

            <div className="bg-section-3">
                <ApsUpdate />
            </div>
        </>
    );
}
