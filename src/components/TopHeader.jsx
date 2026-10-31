import { Link } from 'react-router-dom';

export default function TopHeader({ partner = false }) {
    return (
        <header className="top-header">
            <div className="container header-content">
                <Link to="/">
                    <img src="/images/title.webp" alt="BPR Syariah Artha Pamenang" className="logo" />
                </Link>
                {partner && (
                    <a href="#" className="header-partner">
                        <img src="/images/bprsyariah.webp" alt="BPR Syariah Sahabat UMKM" />
                    </a>
                )}
            </div>
        </header>
    );
}
