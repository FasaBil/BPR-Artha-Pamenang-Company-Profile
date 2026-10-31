import usePageTitle from '../hooks/usePageTitle.js';

export default function Tabungan() {
    usePageTitle('Tabungan - BPR Syariah Artha Pamenang');

    return (
        <main className="product-page">
            <div className="container product-container">

                {/* SECTION 1: TITLE */}
                <div className="product-header">
                    <h1 className="page-title">Tabungan iB Syariah BPR Syariah Artha Pamenang</h1>
                    <div className="title-underline center-underline"></div>
                </div>

                {/* SECTION 2: POSTER */}
                <div className="product-poster">
                    <img src="/images/tabungan.webp" alt="Poster Tabungan iB Syariah" />
                </div>

                {/* SECTION 3: JENIS TABUNGAN */}
                <div className="tabungan-section">
                    <div className="tabungan-grid">

                        {/* Card 1 */}
                        <div className="tabungan-card">
                            <div className="card-icon">1</div>
                            <h3 className="tabungan-title">Tabungan Wadiah</h3>
                            <p className="tabungan-desc">
                                Tabungan dengan setoran awal <strong>10 ribu rupiah</strong>, saldo mengendap <strong>10 ribu rupiah</strong>, gratis biaya admin bulanan.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="tabungan-card">
                            <div className="card-icon">2</div>
                            <h3 className="tabungan-title">Tabungan Mudharabah</h3>
                            <p className="tabungan-desc">
                                Tabungan dengan setoran awal <strong>1 juta rupiah</strong>, saldo mengendap <strong>100 ribu rupiah</strong>, gratis biaya admin bulanan, bagi hasil atau nisbah sesuai prinsip syariah, cocok untuk tabungan investasi.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="tabungan-card">
                            <div className="card-icon">3</div>
                            <h3 className="tabungan-title">Tabungan Gaul</h3>
                            <p className="tabungan-desc">
                                Tabungan dengan setoran awal hanya <strong>10 ribu rupiah</strong>, <strong>tidak ada</strong> saldo mengendap, gratis biaya admin bulanan, sesuai untuk kawula muda atau milenial yang ingin menabung sejak usia muda.
                            </p>
                        </div>

                    </div>
                </div>

                {/* SECTION 4: SYARAT */}
                <div className="requirement-section">
                    <h2 className="req-title">Syarat Pembukaan Rekening</h2>
                    <ul className="req-list">
                        <li>Copy KTP / SIM / Kartu Pelajar</li>
                    </ul>
                    <p className="req-footnote">* hubungi kantor BPR Syariah Artha Pamenang terdekat</p>
                </div>

            </div>

        </main>
    );
}
