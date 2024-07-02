import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/ProductPage.css";

import { useState } from "react";

function ProductPage() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <>
      <Navbar />
      <div className="container p-sm-0">
        <section className="product-body mt-5">
          <a className="product-body-goback" href="products">
            <i className="bi bi-arrow-left"></i> Volver al listado
          </a>
          <div className="d-flex product-body-content">
            <img src="/images/Product.svg" alt="Product" />
            <div className="product-body-content-text">
              <h1>Titulo</h1>
              <h3>Subtitulo</h3>
              <p className="product-body-content-text-paragraph border-bottom pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="product-body-content-text-icons border-bottom pb-3">
                <i className="bi bi-droplet"></i>
                <i className="bi bi-feather"></i>
                <i className="bi bi-tree"></i>
                <i className="bi bi-brightness-high"></i>
              </div>
              <h2>$500</h2>
              <div className="counter-container text-center mt-2">
                <button className="counter-container-counterbutton" onClick={handleDecrement}>
                  -
                </button>
                <span className="counter-value">{count}</span>
                <button className="counter-container-counterbutton" onClick={handleIncrement}>
                  +
                </button>
              </div>
              <div className="d-flex justify-content-center m-4">
                <button className="product-submitbutton">
                  Add to cart <i className="bi bi-cart-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="recomended">
          <h1 className="recomended-title">Recommended for you</h1>
          <div className="row g-5 mt-4 mb-5">
            <div className="product-recomended-plant d-flex flex-column col-sm-12 col-md-6 col-lg-3 text-center">
              <img src="images/recomended-product.svg" alt="" className="recomended-photo" />
              <h4>Hope</h4>
              <p>Pepperomia</p>
              <b>$4.95</b>
            </div>
            <div className="product-recomended-plant d-flex flex-column col-sm-12 col-md-6 col-lg-3 text-center">
              <img src="images/recomended-product.svg" className="recomended-photo" alt="" />
              <h4>Hope</h4>
              <p>Pepperomia</p>
              <b>$4.95</b>
            </div>
            <div className="product-recomended-plant d-flex flex-column col-sm-12 col-md-6 col-lg-3 text-center">
              <img src="images/recomended-product.svg" className="recomended-photo" alt="" />
              <h4>Hope</h4>
              <p>Pepperomia</p>
              <b>$4.95</b>
            </div>
            <div className="product-recomended-plant d-flex flex-column col-sm-12 col-md-6 col-lg-3 text-center">
              <img src="images/recomended-product.svg" className="recomended-photo" alt="" />
              <h4>Hope</h4>
              <p>Pepperomia</p>
              <b>$4.95</b>
            </div>
            <div className="product-recomended-plant d-flex flex-column col-sm-12 col-md-6 col-lg-3 text-center">
              <img src="images/recomended-product.svg" className="recomended-photo" alt="" />
              <h4>Hope</h4>
              <p>Pepperomia</p>
              <b>$4.95</b>
            </div>
            <div className="product-recomended-plant d-flex flex-column col-sm-12 col-md-6 col-lg-3 text-center">
              <img src="images/recomended-product.svg" className="recomended-photo" alt="" />
              <h4>Hope</h4>
              <p>Pepperomia</p>
              <b>$4.95</b>
            </div>
            <div className="product-recomended-plant d-flex flex-column col-sm-12 col-md-6 col-lg-3 text-center">
              <img src="images/recomended-product.svg" className="recomended-photo" alt="" />
              <h4>Hope</h4>
              <p>Pepperomia</p>
              <b>$4.95</b>
            </div>
            <div className="product-recomended-plant d-flex flex-column col-sm-12 col-md-6 col-lg-3 text-center">
              <img src="images/recomended-product.svg" className="recomended-photo" alt="" />
              <h4>Hope</h4>
              <p>Pepperomia</p>
              <b>$4.95</b>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
