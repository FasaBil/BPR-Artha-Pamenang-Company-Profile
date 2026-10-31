import ContactList from './ContactList.jsx';
import MapEmbed from './MapEmbed.jsx';
import VisitorCounter from './VisitorCounter.jsx';

/** Footer halaman dalam (Profil, Tabungan, Deposito, Pembiayaan, Kontak). */
export default function Footer() {
    return (
        <div className="bg-section-3">
            <footer className="site-footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-map-col">
                            <MapEmbed />
                        </div>

                        <div className="footer-contact-col">
                            <h2 className="footer-title">Hubungi Kami</h2>
                            <ContactList />
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <VisitorCounter />
                    </div>
                </div>
            </footer>
        </div>
    );
}
