import usePageTitle from '../hooks/usePageTitle.js';

export default function Kontak() {
    usePageTitle('Hubungi Kami - BPR Syariah Artha Pamenang');

    return (
        <main className="corporate-page kontak-page">
            {/* Menggunakan watermark background yang sama dengan profil perusahaan */}
            <div className="watermark-bg"></div>

            <div className="container">
                <div className="kontak-wrapper">

                    <h1 className="page-title text-center">Informasi Kontak</h1>
                    <div className="title-underline center-underline"></div>

                    <div className="kontak-card">

                        <div className="kontak-item">
                            <h2 className="kontak-subtitle">Kantor Pusat</h2>
                            <p className="kontak-text">
                                JL. Soekarno Hatta 107A, Tepus - Sukorejo<br />
                                Kec. Ngasem, Kabupaten Kediri, Jawa Timur, 64182
                            </p>
                        </div>

                        <div className="kontak-item">
                            <h2 className="kontak-subtitle">Email</h2>
                            <p className="kontak-text">mailing@arthapamenangsyariah.com</p>
                        </div>

                        <div className="kontak-item">
                            <h2 className="kontak-subtitle">Telepon</h2>
                            <p className="kontak-text">0354-694123</p>
                        </div>

                    </div>

                </div>
            </div>

        </main>
    );
}
