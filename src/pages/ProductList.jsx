import "../css/ProductList.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductList() {
  return (
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

        <div>
          <ul className="product-list">
            <li className="product-item ">
              <div className="product-item-img">
                <span className="view-more-badge proxima-nova-bold">View more</span>
                <img
                  src="https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.l.049-1.jpg&w=640&q=80"
                  alt="product_name"
                />
              </div>
              <h3 className="darkgreen proxima-nova-bold mt-1">Product</h3>
              <div className="product-buttons mt-2">
                <span className="proxima-nova-regular">$ 100</span>
                <a href="" className="btn-buy text-center">
                  Add to cart <i className="bi bi-cart"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
