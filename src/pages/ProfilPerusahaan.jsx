import usePageTitle from '../hooks/usePageTitle.js';

export default function ProfilPerusahaan() {
    usePageTitle('Profil Perusahaan - BPR Syariah Artha Pamenang');

    return (
        <main className="corporate-page">
            {/* Watermark Background */}
            <div className="watermark-bg"></div>

            <div className="container">

                {/* SECTION 1: Profil Perusahaan */}
                <section className="corp-section">
                    <h1 className="corp-title">Profil Perusahaan</h1>
                    <p className="corp-text">
                        Seperti diketahui, perkembangan Bank Syariah terutama yang berbentuk Bank Pembiayaan Rakyat Syariah masih jauh tertinggal dibanding dengan Bank Konvensional, konsep perbankan konvensional yang telah melekat dan mendarah daging tidak mungkin diubah dengan konsep syariah dalam waktu yang singkat. Namun demikian, didasari atas komitmen dan tujuan untuk berusaha di bidang perbankan syariah, berdirinya BPR Syariah Artha Pamenang berawal dari keinginan para pendiri yang utamanya untuk turut serta membangun bangsa dalam pemberdayaan dan pengembangan ekonomi berbasis Syariah Islam khususnya di wilayah Kediri.
                    </p>
                    <p className="corp-text">
                        PT Bank Pembiayaan Rakyat Syariah Artha Pamenang adalah Bank atau Lembaga Keuangan milik swasta yang berkedudukan di Kediri Jawa Timur. PT Bank Pembiayaan Rakyat Syariah Artha Pamenang didirikan pada tanggal 23 Maret 2010, berdasarkan akta nomor 162, tanggal 29 Oktober 2009 yang dibuat oleh Notaris Paulus Bingadiputra, SH dan telah mendapatkan persetujuan dan pengesahan dari Menteri Hukum dan Hak Asasi Manusia Republik Indonesia, sesuai Surat Keputusan Nomor AHU-57676.AH.01.01 Tanggal 25, Bulan Nopember, Tahun 2009.
                    </p>
                    <p className="corp-text" style={{ fontWeight: 600 }}>
                        Modal inti adalah sebesar Rp. 8.000.000.000 dan modal disetor saat ini adalah sebesar Rp. 6.000.000.000.
                    </p>
                </section>

                {/* SECTION 2: Pemegang Saham */}
                <section className="corp-section">
                    <h2 className="corp-subtitle">Pemegang Saham PT Bank Pembiayaan Rakyat Syariah Artha Pamenang</h2>
                    <div className="table-responsive">
                        <table className="corp-table">
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Status Pemegang Saham</th>
                                    <th>Saham</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Harijanto Hiendarto</td>
                                    <td>Pengendali</td>
                                    <td>25%</td>
                                </tr>
                                <tr>
                                    <td>Drs. Eka Susanto Widadi Sunarso</td>
                                    <td>-</td>
                                    <td>18.75%</td>
                                </tr>
                                <tr>
                                    <td>Hadi Soetirto</td>
                                    <td>-</td>
                                    <td>18.75%</td>
                                </tr>
                                <tr>
                                    <td>Mintarya</td>
                                    <td>-</td>
                                    <td>18.75%</td>
                                </tr>
                                <tr>
                                    <td>Yudiono Muktiwidjojo</td>
                                    <td>-</td>
                                    <td>18.75%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 3: Pengurus */}
                <section className="corp-section">
                    <h2 className="corp-subtitle">Pengurus PT Bank Pembiayaan Rakyat Syariah Artha Pamenang</h2>
                    <div className="table-responsive">
                        <table className="corp-table">
                            <thead>
                                <tr>
                                    <th>Direksi</th>
                                    <th>Dewan Komisaris</th>
                                    <th>Dewan Pengawas Syariah</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Drs. H Suhardi</strong><br /><span className="text-muted">(Direktur Utama)</span></td>
                                    <td><strong>Aziz Affandi Durbajani, SH</strong><br /><span className="text-muted">(Komisaris Utama)</span></td>
                                    <td><strong>Sulistyo Wahono, S.Ag</strong><br /><span className="text-muted">(Ketua Dewan Pengawas Syariah)</span></td>
                                </tr>
                                <tr>
                                    <td><strong>Setyawati, ST</strong><br /><span className="text-muted">(Direktur Kepatuhan)</span></td>
                                    <td><strong>Yudhi Irwanto</strong><br /><span className="text-muted">(Komisaris)</span></td>
                                    <td><strong>Ropingi, S.Ag., M.Pd</strong><br /><span className="text-muted">(Dewan Pengawas Syariah)</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 4: Visi Misi */}
                <section className="corp-section">
                    <h2 className="corp-subtitle text-center">Visi dan Misi</h2>
                    <div className="vm-quotes">
                        <div className="vm-box">
                            <h4>Visi</h4>
                            <p>“Menjadi Mitra Sejati dalam Pengembangan Ekonomi Umat”</p>
                        </div>
                        <div className="vm-box">
                            <h4>Misi</h4>
                            <p>“Turut Serta Membangun Bangsa melalui Pengembangan Ekonomi Syariah”</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: Struktur Organisasi */}
                <section className="corp-section">
                    <h2 className="corp-subtitle">Struktur Organisasi</h2>
                    <img src="/images/struktur.webp" alt="Struktur Organisasi BPR Syariah Artha Pamenang" className="corp-img" />
                </section>

                {/* SECTION 6: Jaringan Kantor */}
                <section className="corp-section">
                    <h2 className="corp-subtitle">Jaringan Kantor</h2>
                    <img src="/images/jaringankantor.webp" alt="Peta Jaringan Kantor BPR Syariah Artha Pamenang" className="corp-img" />
                </section>

                {/* SECTION 7: Daftar Kantor */}
                <section className="corp-section">
                    <h2 className="corp-subtitle">Daftar Kantor</h2>
                    <div className="office-grid">

                        <div className="office-card main-office">
                            <h3 className="office-name">Kantor Pusat</h3>
                            <p className="office-detail">Jl. Soekarno Hatta No. 107-A, Tepus – Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 694123</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Pare</h3>
                            <p className="office-detail">Jl. Pahlawan Kusuma Bangsa No.13-C, Pare – Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 396789</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Gringging</h3>
                            <p className="office-detail">Jl. Raya Gringging No. 36, Grogol – Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 770234</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Sambi</h3>
                            <p className="office-detail">Jl. Raya Sambi No. 56, Sambi – Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 411566</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Gurah</h3>
                            <p className="office-detail">Jl. Dr. Wahidin No. 152-B, Gurah – Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 548345</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Ngadiluwih</h3>
                            <p className="office-detail">Jl. Prof. Dr. Moestopo No. 479, Ngadiluwih – Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 475555</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Bogo</h3>
                            <p className="office-detail">Jl. RA. Kartini No. 46, Plemahan – Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 4521266</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Wates</h3>
                            <p className="office-detail">Jl. Raya Tawang No. 12 , Wates – Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 7412242</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Kandangan</h3>
                            <p className="office-detail">Jl. Raya Kandangan No. 10, Kandangan – Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 3250555</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Warujayeng</h3>
                            <p className="office-detail">Jl. A. Yani No. 144, Warujayeng – Nganjuk</p>
                            <p className="office-detail"><strong>Telp :</strong> 0358 - 5281599</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Kepung</h3>
                            <p className="office-detail">Ruko Halbanero Jl. Harinjing No. 166, Kepung - Kediri</p>
                            <p className="office-detail"><strong>Telp :</strong> 0354 - 3251010</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Cabang Jombang</h3>
                            <p className="office-detail">Jl. KH. Hasyim Asyari 1 No. 2-C, Kaliwungu - Jombang</p>
                            <p className="office-detail"><strong>Telp :</strong> 0321 - 5288886</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Kas Jetis</h3>
                            <p className="office-detail">Jl. Panglima Sudirman No. 89 Kupang, Jetis - Mojokerto</p>
                            <p className="office-detail"><strong>Telp :</strong> 0321 - 3671777</p>
                        </div>
                        <div className="office-card">
                            <h3 className="office-name">Kantor Cabang Madiun</h3>
                            <p className="office-detail">Jl. Raya Madiun Solo No. 119-A, Jiwan - Madiun</p>
                            <p className="office-detail"><strong>Telp :</strong> 0351 - 4472277</p>
                        </div>

                    </div>
                </section>

            </div>

        </main>
    );
}
