# BPR Syariah Artha Pamenang — Company Profile

Website company profile, dibangun dengan React + Vite + React Router.

## Menjalankan

```bash
npm install
npm run dev       # dev server (http://localhost:5173)
npm run build     # build produksi ke dist/
npm run preview   # coba hasil build
```

## Struktur

```
index.html            entry Vite (#root)
public/images/        semua gambar (diakses sebagai /images/nama.webp)
src/
  main.jsx, App.jsx   bootstrap + daftar route
  components/         Layout, TopHeader, Navbar, Footer, Calendar, ...
    home/             section landing page (Hero, CTA, Produk, APS, ...)
  pages/              Home, ProfilPerusahaan, Tabungan, Deposito, Pembiayaan, Kontak
  data/home.js        data konten landing page
  hooks/              useSiteEffects (reveal, magnetic, tilt), usePageTitle
  utils/calendar.js   logika grid kalender
  styles/style.css    style utama (landing page di-scope ke body.home)
  styles/pages.css    style halaman dalam
```

## Catatan

- **Deploy ke Netlify**: konfigurasi ada di `netlify.toml` (build `npm run build`,
  publish `dist`, Node 22, dan fallback SPA agar `/tabungan`, `/kontak`, ... tidak 404).
  Cukup hubungkan repo di Netlify; tidak perlu mengisi setting build manual.
  Untuk hosting lain, arahkan semua path ke `index.html`.
- **Kalender footer**: komponen `Calendar` menampilkan bulan berjalan secara otomatis,
  tanpa library eksternal.
