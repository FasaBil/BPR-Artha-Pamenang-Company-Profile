import { useEffect, useRef } from 'react';

/**
 * Menampilkan visitor counter di footer.
 *
 * Kode counter pihak ketiga ada di index.html (#visitor-counter-host) dan
 * TIDAK diubah — skripnya memakai document.write, jadi harus dijalankan oleh
 * parser HTML, bukan oleh React. Komponen ini hanya memindahkan node yang sudah
 * ada ke dalam footer, lalu mengembalikannya ke <body> saat footer dilepas
 * (mis. saat pindah halaman) agar isinya tidak hilang.
 */
export default function VisitorCounter({ hidden = false }) {
    const slotRef = useRef(null);

    useEffect(() => {
        const host = document.getElementById('visitor-counter-host');
        const slot = slotRef.current;
        if (!host || !slot) return undefined;

        slot.appendChild(host);
        return () => {
            document.body.appendChild(host);
        };
    }, []);

    return (
        <div className="visitor-counter-container" style={hidden ? { display: 'none' } : undefined}>
            {!hidden && <span className="visitor-label">Statistik Pengunjung</span>}
            <div ref={slotRef} />
        </div>
    );
}
