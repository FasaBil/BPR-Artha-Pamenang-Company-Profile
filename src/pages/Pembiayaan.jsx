import usePageTitle from '../hooks/usePageTitle.js';

export default function Pembiayaan() {
    usePageTitle('Pembiayaan - BPR Syariah Artha Pamenang');

    return (
        <main className="product-page">
            <div className="container product-container">

                {/* SECTION 1: TITLE */}
                <div className="product-header">
                    <h1 className="page-title">Pembiayaan iB Syariah BPR Syariah Artha Pamenang</h1>
                    <div className="title-underline center-underline"></div>
                </div>

                {/* SECTION 2: POSTER */}
                <div className="product-poster">
                    <img src="/images/pembiayaan.webp" alt="Poster Pembiayaan iB Syariah" />
                </div>

                {/* SECTION 3: JENIS PEMBIAYAAN */}
                <div className="pembiayaan-section">
                    <h2 className="section-title text-center" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Jenis Pembiayaan</h2>
                    <div className="pembiayaan-grid">

                        {/* Card 1 */}
                        <div className="pembiayaan-card">
                            <div className="card-icon">1</div>
                            <h3 className="pembiayaan-title">Pembiayaan Murabahah</h3>
                            <p className="pembiayaan-desc">
                                Pembiayaan yang diberikan kepada nasabah, dimana bank akan membelikan barang atau aset yang dibutuhkan oleh nasabah.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="pembiayaan-card">
                            <div className="card-icon">2</div>
                            <h3 className="pembiayaan-title">Pembiayaan Musyarakah</h3>
                            <p className="pembiayaan-desc">
                                Pembiayaan dimana terdapat perjanjian antara pihak bank dan nasabah yang saling menyumbang dana/modal, dan manajemen usaha pada suatu usaha tertentu dengan proporsi sesuai kesepakatan antara bank dan nasabah.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="pembiayaan-card">
                            <div className="card-icon">3</div>
                            <h3 className="pembiayaan-title">Pembiayaan Multijasa</h3>
                            <p className="pembiayaan-desc">
                                Pembiayaan berdasarkan akad ijarah dan jasa keuangan, antara untuk keperluan pendidikan, kesehatan, pernikahan, modal kerja, perjalanan ibadah keagamaan, dan lain-lain.
                            </p>
                        </div>

                    </div>
                </div>

                {/* SECTION 4: SEGMEN PEMBIAYAAN */}
                <div className="segmen-section">
                    <h2 className="section-title text-center" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Segmen Pembiayaan</h2>
                    <div className="segmen-box">
                        <ul className="segmen-list">
                            <li>Pembiayaan Modal Kerja</li>
                            <li>Pembiayaan Investasi</li>
                            <li>Pembiayaan Konsumtif</li>
                            <li>Pembiayaan Produktif</li>
                            <li>Pembiayaan Multijasa</li>
                        </ul>
                    </div>
                </div>

                {/* SECTION 5: SYARAT PEMBIAYAAN */}
                <div className="requirement-section">
                    <h2 className="req-title">Syarat Pembiayaan</h2>
                    <ol className="req-list-numbered">
                        <li>Copy KTP</li>
                        <li>Copy KK / Surat Nikah</li>
                        <li>Copy Agunan BPKB / SHM</li>
                    </ol>
                </div>

                {/* SECTION 6: SKEMA PEMBIAYAAN */}
                <div className="skema-section">
                    <h2 className="section-title text-center" style={{ fontSize: '1.8rem', marginBottom: '30px', marginTop: '50px' }}>Skema Pembiayaan</h2>
                    <div className="skema-grid">

                        {/* Skema 1 */}
                        <div className="skema-card">
                            <h3 className="skema-title">Flat</h3>
                            <ul className="skema-list">
                                <li>Jangka waktu 1 s/d 3 tahun</li>
                                <li>Angsuran per bulan tetap selama jangka waktu</li>
                                <li>Bisa dilunasi sewaktu-waktu</li>
                            </ul>
                        </div>

                        {/* Skema 2 */}
                        <div className="skema-card">
                            <h3 className="skema-title">Musiman / Sliding</h3>
                            <ul className="skema-list">
                                <li>Jangka waktu 6 bulan s/d 1 tahun</li>
                                <li>Angsuran ringan di awal, pelunasan di akhir</li>
                                <li>Bisa dilunasi sewaktu-waktu sebelum masa pembiayaan berakhir</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </main>
    );
}
