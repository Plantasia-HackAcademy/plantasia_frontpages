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
          <div className="product-list-filter ">
            <button className="btn-filter me-2">
              Filter <i class="bi bi-filter"></i>
            </button>
            <select name="sort-by" id="sort-by" className="select-filter">
              <option value="sort-by" selected>
                Sort by
              </option>
              <option value="name-asc">Name: ascending</option>
              <option value="name-desc">Name: descending</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="relevance-asc">Relevance: ascending</option>
              <option value="relevance-desc">Relevance: descending</option>
            </select>
          </div>
        </div>
        <div className="filter-results lightgreen my-1">
          <small>1-20 of 500 results</small>
        </div>

        <div>
          <ul class="product-list">
            <li class="product-item ">
              <div className="product-item-img">
                <span className="fav-budget">
                  <i className="bi bi-suit-heart"></i>
                </span>
                <img
                  src="https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.l.049-1.jpg&w=640&q=80"
                  alt="product_name"
                />
              </div>
              <h3 className="darkgreen mt-1">Product</h3>
              <span className="proxima-nova-bold">$ 100</span>
              <div className="product-buttons mt-2">
                <button className="btn-more">View more</button>
                <button className="btn-buy">
                  Add to cart <i class="bi bi-cart3"></i>
                </button>
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
