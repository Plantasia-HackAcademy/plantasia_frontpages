import "../css/ProductList.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const products = async () => {
      const response = await axios({
        url: `${import.meta.env.VITE_API_URL}/products`,
        method: "GET",
      });
      setProducts(response.data.products);
    };
    products();
  }, []);

  return (
    products && (
      <>
        <Navbar />
        <div className="container product-list-container">
          <h1 className="galadali-bold darkgreen my-3">All products</h1>
          <div className="filter-container">
            <div className="product-list-filter">
              <button className="btn-filter me-2">
                Filter <i className="bi bi-filter"></i>
              </button>
              <select name="sort-by" id="sort-by" className="select-filter">
                <option defaultValue="sort-by">Sort by</option>
                <option value="name-asc">Name: ascending</option>
                <option value="name-desc">Name: descending</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="relevance-asc">Relevance: ascending</option>
                <option value="relevance-desc">Relevance: descending</option>
              </select>
            </div>
          </div>
          <div className="filter-results lightgreen mb-2">
            <small>1-20 of 500 results</small>
          </div>

          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item ">
                <div>
                  <div className="product-item-img shadow">
                    <span className="view-more-badge proxima-nova-regular">View more</span>
                    <img
                      src={`${import.meta.env.VITE_IMAGES_URL}plants/${product.image}`}
                      alt={product.name}
                    />
                  </div>
                  <h4 className="darkgreen proxima-nova-bold mt-3">{product.name.split("(")[0]}</h4>
                </div>
                <div className="product-buttons mt-2">
                  <span className="proxima-nova-regular">$ {product.price}</span>
                  <a href="" className="btn-buy text-center">
                    Add <i className="bi bi-cart"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </>
    )
  );
}

export default ProductList;
