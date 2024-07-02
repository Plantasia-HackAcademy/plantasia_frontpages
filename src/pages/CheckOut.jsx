import "../css/CheckOut.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="checkout">
      <Navbar />
      <div className="container px-sm-0 py-3">
        <h1 className="galadali-bold darkgreen mb-3">Hi! This is your shopping cart.</h1>
        <table className="table w-100">
          <thead className="galadali-regular fs-4">
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="align-top proxima-nova-regular fs-5">
            <tr>
              <td>
                <div className="d-flex flex-wrap">
                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}Product.svg`}
                    className="img-fluid me-3 mb-3 mb-lg-0 product-img rounded-corner shadow"
                    alt="plant"
                  />
                  <div>
                    <p className="proxima-nova-bold m-0 darkgreen">Fern</p>
                    <p className="m-0 darkgreen">Sparrow Grass</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center quantity">
                  <i className="bi bi-plus-circle-fill"></i>
                  <p className="m-0 mx-1 darkgreen mx-3">20</p>
                  <i className="bi bi-dash-circle-fill"></i>
                </div>
              </td>
              <td>
                <p className="m-0 darkgreen">$50.00</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <p className="darkgreen m-0 d-flex flex-column d-md-inline">
                  <span className="proxima-nova-bold me-1">Subtotal</span>
                  <span className="proxima-nova-regular">(Including IVA)</span>
                </p>
              </td>
              <td>
                <p className="proxima-nova-regular darkgreen m-0">$50.00</p>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div className="d-flex flex-column">
                  <label htmlFor="order-notes" className="proxima-nova-bold darkgreen mb-2">
                    Order notes
                  </label>
                  <textarea
                    rows={3}
                    name="order-notes"
                    id="order-notes"
                    className="mb-2 p-2 rounded-corner"
                  ></textarea>
                  <div className="mb-2">
                    <input
                      type="checkbox"
                      name="personal-message"
                      id="personal-message"
                      className="checkbox me-1"
                    />
                    <label htmlFor="personal-message" className="proxima-nova-bold darkgreen me-1">
                      Personal Message
                    </label>
                    <span className="proxima-nova-regular darkgreen">($15.00 excluding IVA)</span>
                  </div>
                  <div className="mb-2">
                    <input
                      type="checkbox"
                      name="heat-package"
                      id="heat-package"
                      className="checkbox me-1"
                    />
                    <label
                      htmlFor="heat-package"
                      id="heat-package"
                      className="proxima-nova-bold darkgreen me-1"
                    >
                      Heat Package
                    </label>
                    <span className="proxima-nova-regular darkgreen">($20.00 excluding IVA)</span>
                  </div>
                  <p className="proxima-nova-bold darkgreen m-0">+ Add a discount code</p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <p className="darkgreen m-0">
                  <span className="proxima-nova-bold me-1">Subtotal</span>
                  <span className="proxima-nova-regular">(Including IVA)</span>
                </p>
              </td>
              <td>
                <p className="proxima-nova-regular darkgreen m-0">$50.00</p>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="form-button rounded-pill mb-2 shadow">Continue to checkout</button>
        <div>
          <Link to="/" className="proxima-nova-regular mediumgreen fs-5">
            ← Continue Shopping
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
