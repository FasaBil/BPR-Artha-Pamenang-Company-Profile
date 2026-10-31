export const WEEKDAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

const monthFormatter = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' });

/** "September 2026" */
export function formatMonthTitle(year, month) {
    return monthFormatter.format(new Date(year, month, 1));
}

export function isSameDay(a, b) {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

/**
 * Susun grid kalender sebuah bulan: array minggu, tiap minggu 7 Date (Minggu-Sabtu).
 * Hari dari bulan sebelum/sesudahnya ikut disertakan sebagai pengisi. Minggu terakhir
 * dibuang bila seluruhnya jatuh di luar bulan, jadi hasilnya 4-6 baris.
 */
export function buildMonthGrid(year, month) {
    const firstWeekday = new Date(year, month, 1).getDay();
    const weeks = [];

    for (let w = 0; w < 6; w += 1) {
        const week = [];
        for (let d = 0; d < 7; d += 1) {
            // Date menangani limpahan hari/bulan sendiri (mis. tanggal 0 atau 32)
            week.push(new Date(year, month, 1 - firstWeekday + w * 7 + d));
        }
        weeks.push(week);
    }

    while (weeks.length > 4 && weeks[weeks.length - 1].every((day) => day.getMonth() !== month)) {
        weeks.pop();
    }
    return weeks;
}

/** Geser (year, month) sebanyak `delta` bulan, mis. month 11 + 1 -> tahun berikutnya, month 0. */
export function shiftMonth(year, month, delta) {
    const d = new Date(year, month + delta, 1);
    return { year: d.getFullYear(), month: d.getMonth() };
}
