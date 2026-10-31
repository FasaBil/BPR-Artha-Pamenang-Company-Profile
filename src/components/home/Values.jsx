import { values } from '../../data/home.js';

export default function Values() {
    return (
        <section className="values-section">
            <div className="container">
                <div className="values-grid">
                    {values.map((item) => (
                        <div className="value-card" key={item.title}>
                            <div className="icon-wrapper">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h3 className="value-title">{item.title}</h3>
                            <p className="value-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
