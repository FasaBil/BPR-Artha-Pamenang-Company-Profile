import { Link } from 'react-router-dom';
import { products } from '../../data/home.js';

export default function Products() {
    return (
        <section className="products-section">
            <div className="container">
                <h2 className="section-title text-center text-white">
                    Simpanan
                    <br />
                    di Artha Pamenang Syariah
                </h2>

                <div className="products-grid">
                    {products.map((item) => (
                        <div className="product-card" key={item.title}>
                            <div className="product-img-wrapper">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="product-content">
                                <h3 className="product-title">{item.title}</h3>
                                <p className="product-desc">{item.desc}</p>
                                <Link to={item.to} className="btn-primary">Lihat Detail</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
