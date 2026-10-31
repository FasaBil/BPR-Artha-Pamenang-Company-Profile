import { Link } from 'react-router-dom';

export default function CtaBanner() {
    return (
        <section className="cta-banner-section reveal">
            <div className="container">
                <div className="cta-banner-content">
                    <div className="cta-text">
                        <span className="cta-eyebrow">BERGABUNG SEKARANG</span>
                        <h2 className="cta-title">
                            Wujudkan Impian Anda
                            <br />
                            Bersama Kami
                        </h2>
                        <p className="cta-desc">
                            Bergabunglah dengan ribuan nasabah yang telah mempercayakan kebutuhan keuangan mereka
                            kepada BPR Syariah Artha Pamenang — aman, mudah, dan berkah.
                        </p>
                    </div>
                    <div className="cta-actions">
                        <a href="#" className="cta-btn-gold">Simulasi Pembiayaan</a>
                        <Link to="/kontak" className="cta-btn-outline">Hubungi Kami</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
