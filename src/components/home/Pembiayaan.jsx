import { pembiayaanImages } from '../../data/home.js';

export default function Pembiayaan() {
    // Set gambar digandakan agar animasi marquee berulang mulus (translateX -50%)
    const loop = [...pembiayaanImages, ...pembiayaanImages];

    return (
        <section className="pembiayaan-section">
            <h2 className="section-title text-center">
                Pembiayaan
                <br />
                di Artha Pamenang Syariah
            </h2>

            <div className="marquee-container">
                <div className="marquee-content">
                    {loop.map((img, i) => (
                        <img key={i} src={img.src} alt={img.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
}
