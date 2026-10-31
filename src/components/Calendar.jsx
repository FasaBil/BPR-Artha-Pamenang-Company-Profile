import { useState } from 'react';
import {
    WEEKDAYS,
    buildMonthGrid,
    formatMonthTitle,
    isSameDay,
    shiftMonth,
} from '../utils/calendar.js';

const isWeekend = (index) => index === 0 || index === 6;

/** Kalender bulanan dinamis (Bahasa Indonesia, minggu mulai Minggu), tanpa library eksternal. */
export default function Calendar() {
    const [today] = useState(() => new Date());
    const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });

    const weeks = buildMonthGrid(view.year, view.month);
    const title = formatMonthTitle(view.year, view.month);
    const isCurrentMonth = view.year === today.getFullYear() && view.month === today.getMonth();

    const go = (delta) => setView((v) => shiftMonth(v.year, v.month, delta));
    const goToday = () => setView({ year: today.getFullYear(), month: today.getMonth() });

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button type="button" className="calendar-nav" aria-label="Bulan sebelumnya" onClick={() => go(-1)}>
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="currentColor" aria-hidden="true">
                        <polygon points="9 0 9 12 0 6" />
                    </svg>
                </button>

                <div className="calendar-heading">
                    <h3 className="calendar-title" aria-live="polite">{title}</h3>
                    {!isCurrentMonth && (
                        <button type="button" className="calendar-today-btn" onClick={goToday}>
                            Hari ini
                        </button>
                    )}
                </div>

                <button type="button" className="calendar-nav" aria-label="Bulan berikutnya" onClick={() => go(1)}>
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="currentColor" aria-hidden="true">
                        <polygon points="0 0 0 12 9 6" />
                    </svg>
                </button>
            </div>

            <table className="calendar-table">
                <thead>
                    <tr>
                        {WEEKDAYS.map((name, i) => (
                            <th key={name} scope="col" className={isWeekend(i) ? 'is-weekend' : undefined}>
                                {name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week) => (
                        <tr key={week[0].toISOString()}>
                            {week.map((day) => {
                                const outside = day.getMonth() !== view.month;
                                const isToday = isSameDay(day, today);
                                const classes = [outside && 'is-outside', isToday && 'is-today']
                                    .filter(Boolean)
                                    .join(' ');
                                return (
                                    <td key={day.toISOString()} className={classes || undefined}
                                        aria-current={isToday ? 'date' : undefined}>
                                        <span className="calendar-date">{day.getDate()}</span>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
