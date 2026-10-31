import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PRODUCT_PATHS = ['/tabungan', '/deposito', '/pembiayaan'];

export default function Navbar() {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Tutup menu mobile saat pindah halaman
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const isCorporate = pathname === '/profil-perusahaan';
    const isProduct = PRODUCT_PATHS.includes(pathname);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="mobile-logo-link">
                    <img src="/images/logo.png" alt="Logo BPR" className="mobile-logo" />
                </Link>

                <button
                    className="mobile-toggle"
                    aria-label="Toggle Menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>

                <ul className={`nav-links${open ? ' open' : ''}`}>
                    <li className={`nav-item${pathname === '/' ? ' active' : ''}`}>
                        <Link to="/">Beranda</Link>
                    </li>

                    <li className={`nav-item has-dropdown${isCorporate ? ' active' : ''}`}>
                        <a href="#">Corporate <span className="chevron">▼</span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Email</a></li>
                            <li><Link to="/profil-perusahaan">Profile Perusahaan</Link></li>
                            <li><a href="#">Jaringan Kantor</a></li>
                        </ul>
                    </li>

                    <li className={`nav-item has-dropdown${isProduct ? ' active' : ''}`}>
                        <a href="#">Produk <span className="chevron">▼</span></a>
                        <ul className="dropdown-menu">
                            <li><Link to="/tabungan">Tabungan</Link></li>
                            <li><Link to="/deposito">Deposito</Link></li>
                            <li><Link to="/pembiayaan">Pembiayaan</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item"><a href="#">Info &amp; Berita</a></li>
                    <li className={`nav-item${pathname === '/kontak' ? ' active' : ''}`}>
                        <Link to="/kontak">Hubungi Kami</Link>
                    </li>
                    <li className="nav-item"><a href="#">Simulasi Pembiayaan</a></li>
                </ul>
            </div>
        </nav>
    );
}
