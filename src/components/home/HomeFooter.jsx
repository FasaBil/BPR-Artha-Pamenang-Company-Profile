import ContactList from '../ContactList.jsx';
import MapEmbed from '../MapEmbed.jsx';
import VisitorCounter from '../VisitorCounter.jsx';

/** Footer landing page: peta, kontak, kalender, logo, dan bar pengawasan. */
export default function HomeFooter() {
    return (
        <div className="bg-section-3">
            <footer className="site-footer">
                <div className="container container-wide">
                    <div className="footer-grid">
                        {/* Kolom kiri: peta + kontak */}
                        <div className="footer-left-col">
                            <MapEmbed />
                            <h2 className="footer-title">Hubungi Kami</h2>
                            <ContactList emailAsLink />
                        </div>

                        {/* Kolom kanan: kalender + logo */}
                        <div className="footer-right-col">
                            <div className="calendar-wrapper">
                                <img src="/images/calendar.webp" alt="Kalender" />
                            </div>

                            <div className="footer-logos">
                                <img src="/images/ib.webp" alt="iB" />
                                <img src="/images/bprsyariah.webp" alt="BPR Syariah" />
                                <img src="/images/himbarsi.webp" alt="Himbarsi" />
                            </div>
                        </div>
                    </div>

                    <VisitorCounter hidden />
                </div>

                <div className="footer-bottom-bar">
                    BPR Syariah Artha Pamenang diawasi oleh Otoritas Jasa Keuangan serta merupakan peserta Lembaga
                    Penjamin Simpanan
                </div>
            </footer>
        </div>
    );
}
