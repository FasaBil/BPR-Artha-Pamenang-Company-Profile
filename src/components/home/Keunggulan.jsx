import { keunggulan } from '../../data/home.js';

export default function Keunggulan() {
    return (
        <section className="keunggulan-section reveal" id="keunggulan">
            <div className="container container-mid">
                <h2 className="section-title text-center">Mengapa Memilih Kami?</h2>
                <div className="keunggulan-grid">
                    {keunggulan.map((item, i) => {
                        const title = Array.isArray(item.title)
                            ? item.title.flatMap((line, idx) => (idx ? [<br key={idx} />, line] : [line]))
                            : item.title;
                        return (
                            <div className={`keunggulan-card reveal reveal-delay-${i + 1}`} key={item.icon}>
                                <div className="keunggulan-icon-wrap">
                                    <img src={item.icon} alt={Array.isArray(item.title) ? item.title.join(' ') : item.title} />
                                </div>
                                <h3 className="keunggulan-title">{title}</h3>
                                <p className="keunggulan-desc">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
