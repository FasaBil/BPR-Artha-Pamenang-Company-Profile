import usePageTitle from '../hooks/usePageTitle.js';

export default function Deposito() {
    usePageTitle('Deposito - BPR Syariah Artha Pamenang');

    return (
        <main className="product-page">
            <div className="container product-container">

                {/* SECTION 1: TITLE */}
                <div className="product-header">
                    <h1 className="page-title">Deposito iB Syariah BPR Syariah Artha Pamenang</h1>
                    <div className="title-underline center-underline"></div>
                </div>

                {/* SECTION 2: POSTER */}
                <div className="product-poster">
                    <img src="/images/deposito.webp" alt="Poster Deposito iB Syariah" />
                </div>

                {/* SECTION 3: DESKRIPSI PRODUK */}
                <div className="product-desc-section">
                    <p className="product-paragraph">
                        <strong>Deposito iB Syariah</strong> merupakan produk investasi berjangka dengan prinsip syariah menggunakan akad <em>Mudharabah</em>.
                    </p>
                    <p className="product-paragraph">
                        Nasabah mendapatkan bagi hasil (nisbah) sesuai prinsip syariah yang disepakati di awal. Produk ini cocok bagi nasabah yang ingin berinvestasi dengan aman, stabil, dan sesuai syariah.
                    </p>

                    <div className="keunggulan-box">
                        <h3 className="keunggulan-title">Keunggulan:</h3>
                        <ul className="keunggulan-list">
                            <li>Menggunakan prinsip syariah (akad Mudharabah)</li>
                            <li>Bagi hasil kompetitif</li>
                            <li>Dana aman dan terpercaya</li>
                            <li>Pilihan jangka waktu fleksibel</li>
                        </ul>
                    </div>
                </div>

                {/* SECTION 4: PILIHAN JANGKA WAKTU */}
                <div className="jangka-waktu-section">
                    <h2 className="section-title text-center" style={{ fontSize: '1.6rem', marginBottom: '25px' }}>Pilihan Jangka Waktu</h2>
                    <div className="waktu-grid">
                        <div className="waktu-card">
                            <span className="waktu-number">1</span>
                            <span className="waktu-text">Bulan</span>
                        </div>
                        <div className="waktu-card">
                            <span className="waktu-number">3</span>
                            <span className="waktu-text">Bulan</span>
                        </div>
                        <div className="waktu-card">
                            <span className="waktu-number">6</span>
                            <span className="waktu-text">Bulan</span>
                        </div>
                        <div className="waktu-card">
                            <span className="waktu-number">12</span>
                            <span className="waktu-text">Bulan</span>
                        </div>
                    </div>
                </div>

                {/* SECTION 5: SYARAT */}
                <div className="requirement-section">
                    <h2 className="req-title">Syarat Pembukaan Deposito</h2>
                    <ol className="req-list-numbered">
                        <li>Copy KTP / SIM</li>
                        <li>Mengisi formulir pembukaan deposito</li>
                    </ol>
                    <p className="req-footnote">* hubungi kantor BPR Syariah Artha Pamenang terdekat</p>
                </div>

            </div>

        </main>
    );
}
