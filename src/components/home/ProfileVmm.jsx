import { vmm } from '../../data/home.js';

export function Profile() {
    return (
        <section className="profile-section">
            <div className="container">
                <div className="profile-container">
                    <div className="profile-image-col">
                        <div className="image-frame">
                            <img src="/images/profile.webp" alt="Profil Singkat BPR Syariah Artha Pamenang" />
                        </div>
                    </div>

                    <div className="profile-text-col">
                        <h2 className="section-title">PROFIL SINGKAT</h2>
                        <div className="title-underline" />
                        <p className="profile-paragraph">
                            PT. Bank Pembiayaan Rakyat Syariah Artha Pamenang berdiri pada tanggal 23 maret 2010,
                            berdasarkan akta nomor 162 tanggal 29 oktober 2009 dan telah mendapatkan persetujuan dari
                            Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia, sesuai surat keputusan nomor
                            AHU-57676.01.01 tahun 2009 tanggal 25 Nopember 2009.
                        </p>
                        <p className="profile-paragraph">
                            BPR Syariah Artha Pamenang ini merupakan BPR Syariah pertama yang dimiliki oleh Group Artha
                            Pamenang setelah 3 BPR konvensional yang telah beroperasi lebih dari 20 tahun.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Vmm() {
    return (
        <section className="vmm-section reveal">
            <div className="container">
                <div className="vmm-grid">
                    {vmm.map((item) => (
                        <div className="vmm-card" key={item.title}>
                            <div className="vmm-img-wrapper">
                                <img src={item.img} alt={item.alt} />
                            </div>
                            <div className="vmm-content">
                                <h3 className="vmm-title">{item.title}</h3>
                                <p className="vmm-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
