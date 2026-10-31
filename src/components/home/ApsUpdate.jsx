export default function ApsUpdate() {
    return (
        <section className="aps-update-section">
            <div className="container container-wide">
                <h2 className="section-title text-center text-white">APS Update</h2>

                <div className="aps-update-card">
                    <div className="aps-image-col">
                        <img src="/images/aps_update_1.webp" alt="APS Beri Edukasi Literasi Keuangan" />
                        <div className="aps-slider-controls">
                            <button className="aps-prev" aria-label="Previous">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                    <polygon points="8 0 8 10 1 5" />
                                </svg>
                            </button>
                            <button className="aps-next" aria-label="Next">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                                    <polygon points="2 0 2 10 9 5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="aps-text-col">
                        <h3 className="aps-title">APS Beri Edukasi Literasi Keuangan Karangtaruna Desa Besuk</h3>
                        <div className="aps-divider" />
                        <p>
                            Dalam rangka mengedukasi literasi keuangan kepada masyarakat dan sekaligus promosi produk,
                            BPR Syariah menggandeng karang taruna desa Besuk Gurah.
                        </p>
                        <p>
                            Acara tersebut di gelar pada hari Jum&apos;at, 26 Juni 2026 yang mana telah di ikuti
                            pengurus dan anggota karang taruna desa Besuk. Mereka sangat antusias untuk mengikuti
                            pemaparan materi dari BPR Syariah Artha Pamenang tentang produk produk pembiayaan dan
                            simpanan, literasi keuangan, bahaya pinjol dan terutama materi Sahabat TKI yaitu pembiayaan
                            utk kebutuhan calon TKI
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
