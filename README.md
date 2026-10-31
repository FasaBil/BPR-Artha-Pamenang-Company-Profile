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
index.html            entry Vite (#root) + blok visitor counter
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

- **Visitor counter**: kodenya ada di `index.html` (`#visitor-counter-host`) dan
  sengaja tidak diubah karena skrip pihak ketiga memakai `document.write`.
  Komponen `VisitorCounter` hanya memindahkan node itu ke footer.
- **Hosting**: aplikasi ini SPA dengan route bersih (`/tabungan`, `/kontak`, ...).
  Server harus mengarahkan semua path ke `index.html` (fallback SPA).
- **Kalender footer**: komponen `Calendar` menampilkan bulan berjalan secara otomatis,
  tanpa library eksternal.
