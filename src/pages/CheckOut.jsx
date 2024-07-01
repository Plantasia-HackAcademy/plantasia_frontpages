import "../css/CheckOut.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container px-sm-0 py-3">
        <h1 className="galadali-bold darkgreen mb-3">Hi! This is your shopping cart.</h1>
        <table className="table checkout-table w-100">
          <thead className="galadali-regular fs-4">
            <tr>
              <th>Product</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="align-top proxima-nova-regular">
            <tr>
              <td>
                <div className="d-flex flex-wrap">
                  <img
                    src="../public/images/product.svg"
                    className="img-fluid me-3 mb-3 mb-lg-0 checkout-product-img"
                    alt="plant"
                  />
                  <div>
                    <p className="proxima-nova-bold m-0 darkgreen">Fern</p>
                    <p className="m-0 darkgreen">Sparrow Grass</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="m-0 darkgreen">Small</p>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <i class="bi bi-plus-circle-fill almond"></i>
                  <p className="m-0 mx-1 darkgreen">1</p>
                  <i class="bi bi-dash-circle-fill almond"></i>
                </div>
              </td>
              <td>
                <p className="m-0 darkgreen">$50.00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Home;
