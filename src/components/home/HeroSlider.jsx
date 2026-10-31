import { useEffect, useState } from 'react';
import { slides } from '../../data/home.js';

const INTERVAL_MS = 7000;

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const count = slides.length;

    // Auto-play; timer dimulai ulang setiap slide berganti (termasuk navigasi manual)
    useEffect(() => {
        const id = setInterval(() => setCurrent((c) => (c + 1) % count), INTERVAL_MS);
        return () => clearInterval(id);
    }, [current, count]);

    const prev = () => setCurrent((c) => (c - 1 + count) % count);
    const next = () => setCurrent((c) => (c + 1) % count);

    return (
        <section className="hero-section">
            <div className="container">
                <div className="slider-wrapper">
                    <div className="slides-container">
                        {slides.map((slide, i) => (
                            <div key={slide.src} className={`slide${i === current ? ' active' : ''}`}>
                                <img src={slide.src} alt={slide.alt} />
                            </div>
                        ))}
                    </div>

                    <button className="slider-arrow prev-btn" aria-label="Previous Slide" onClick={prev}>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
                            <polygon points="13 0 13 18 0 9" />
                        </svg>
                    </button>
                    <button className="slider-arrow next-btn" aria-label="Next Slide" onClick={next}>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
                            <polygon points="1 0 1 18 14 9" />
                        </svg>
                    </button>

                    <div className="slider-dots">
                        {slides.map((slide, i) => (
                            <div
                                key={slide.src}
                                className={`dot${i === current ? ' active' : ''}`}
                                onClick={() => setCurrent(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
