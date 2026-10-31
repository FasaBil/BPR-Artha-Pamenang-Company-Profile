export const slides = [
    { src: '/images/slideshow1.webp', alt: 'Gedung Artha Pamenang' },
    { src: '/images/slideshow2.webp', alt: 'Layanan Perbankan Syariah' },
    { src: '/images/slideshow3.webp', alt: 'Promo Pembiayaan' },
];

export const values = [
    {
        icon: '/images/amanah.webp',
        title: 'Amanah',
        desc: 'Didukung oleh SDM profesional dan berintegritas, management perusahaan yang kredibel dan akuntabel, di awasi oleh OJK serta dijamin oleh LPS.',
    },
    {
        icon: '/images/mudah.webp',
        title: 'Mudah',
        desc: 'Proses pelayanan yang mudah dan transparan dengan menerapkan regulasi OJK secara update.',
    },
    {
        icon: '/images/berkah.webp',
        title: 'Berkah',
        desc: 'Halal, Bermanfaat dan Menjadi Berkah untuk seluruh nasabah, karena dijalankan sesuai dengan prinsip Syariah.',
    },
];

export const vmm = [
    {
        img: '/images/visi.webp',
        alt: 'Visi BPR Syariah Artha Pamenang',
        title: 'Visi',
        desc: 'Menjadi Mitra Sejati dalam Pengembangan Ekonomi Umat.',
    },
    {
        img: '/images/misi.webp',
        alt: 'Misi BPR Syariah Artha Pamenang',
        title: 'Misi',
        desc: 'Ikut Serta Membangun Bangsa Melalui Pengembangan Ekonomi Syariah.',
    },
    {
        img: '/images/motto.webp',
        alt: 'Motto BPR Syariah Artha Pamenang',
        title: 'Motto',
        desc: 'Dengan Syariah Hidup Lebih Barokah.',
    },
];

export const keunggulan = [
    {
        icon: '/images/ojk.webp',
        title: 'Diawasi OJK',
        desc: 'BPR Syariah Artha Pamenang berizin dan diawasi oleh OJK',
    },
    {
        icon: '/images/lps.webp',
        title: 'Dijamin LPS',
        desc: 'BPR Syariah Artha Pamenang merupakan peserta penjaminan LPS (hingga Rp. 2 Miliar)',
    },
    {
        icon: '/images/cepat.webp',
        title: 'Proses Cepat & Mudah',
        desc: 'Pengajuan pembiayaan dengan syarat minimal dan proses yang transparan.',
    },
    {
        icon: '/images/syariah.webp',
        title: 'Prinsip Syariah Murni',
        desc: 'Seluruh produk dirancang sesuai prinsip syariah Islam — halal, berkah, dan bebas riba.',
    },
    {
        icon: '/images/kediri.webp',
        title: ['Melayani Masyarakat', 'Kediri'],
        desc: 'Sejak 2010, kami hadir melayani masyarakat Kediri dan sekitarnya dengan sepenuh hati.',
    },
];

export const products = [
    {
        img: '/images/tabungan_wadiah.webp',
        title: 'Tabungan iB Wadiah',
        desc: 'Tabungan aman, bebas riba, bebas biaya bulanan dan mendapatkan bonus secara periodik.',
        to: '/tabungan',
    },
    {
        img: '/images/tabungan_mudharabah.webp',
        title: 'Tabungan iB Mudharabah',
        desc: 'Produk simpanan yang menggunakan akad kerja sama (bagi hasil) antara nasabah sebagai pemilik dana dan bank sebagai pengelola dana.',
        to: '/tabungan',
    },
    {
        img: '/images/deposito_mudharabah.webp',
        title: 'Deposito iB Mudharabah',
        desc: 'Produk investasi dengan sistem bagi hasil kompetitif yang sesuai dengan prinsip ekonomi syariah.',
        to: '/deposito',
    },
];

export const pembiayaanImages = [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/images/pembiayaan_${n}.webp`,
    alt: `Pembiayaan ${n}`,
}));
