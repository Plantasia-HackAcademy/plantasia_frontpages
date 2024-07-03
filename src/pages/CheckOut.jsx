import "../css/CheckOut.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const stock = 50;

  return (
    <div className="checkout">
      <div className="container px-sm-0 py-3">
        <h1 className="galadali-bold darkgreen mb-3">Hi! This is your shopping cart.</h1>
        <table className="table">
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
                    src="../images/plants/charlotte.png"
                    // src={`${import.meta.env.VITE_IMAGES_URL}Product.svg`}
                    className="img-fluid me-3 mb-3 mb-lg-0 product-img rounded-corner shadow"
                    alt="plant"
                  />
                  <div>
                    <p className="proxima-nova-bold m-0 darkgreen">Charlotte</p>
                    <p className="m-0 darkgreen">Schefflera (Umbrella tree)</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center quantity mb-1">
                  <i className="bi bi-dash-circle-fill"></i>
                  <p className="m-0 mx-1 darkgreen mx-md-2 mx-lg-3">20</p>
                  <i className="bi bi-plus-circle-fill"></i>
                </div>
                {stock < 10 ? (
                  <small className="proxima-nova-bold terracotta">
                    {`Only ${stock} left in stock!`}
                  </small>
                ) : (
                  <small className="proxima-nova-regular lightgreen">In Stock</small>
                )}
              </td>
              <td>
                <p className="m-0 darkgreen mb-1">$50.00</p>
                <small className="proxima-nova-regular almond">$2.50 c/u</small>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <p className="darkgreen m-0 d-flex flex-column d-md-inline">
                  <span className="proxima-nova-bold me-1">Subtotal</span>
                  <span className="proxima-nova-regular">(Including Taxes)</span>
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
                    <span className="proxima-nova-regular darkgreen">($15.00 excluding Taxes)</span>
                  </div>
                  <p className="proxima-nova-bold darkgreen m-0">+ Add a discount code</p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <p className="darkgreen m-0">
                  <span className="proxima-nova-bold me-1">Subtotal</span>
                  <span className="proxima-nova-regular">(Including Taxes)</span>
                </p>
              </td>
              <td>
                <p className="proxima-nova-regular darkgreen m-0">$50.00</p>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p className="proxima-nova-bold darkgreen m-0 mb-3">Shipping Information</p>
                <div className="d-flex flex-column flex-md-row">
                  <div className="input-group d-flex flex-column me-md-1 mb-2 first-name">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Type your first name"
                      className="mt-1 p-1"
                    />
                  </div>
                  <div className="input-group d-flex flex-column w-md-50 ms-md-1 mb-2 last-name">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Type your last name"
                      className="mt-1 p-1"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="input-group d-flex flex-column mb-2 me-md-1 address">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Type your address"
                      className="mt-1 p-1"
                    />
                  </div>
                  <div className="input-group d-flex flex-column me-md-1 w-md-50 mx-md-1 mb-2 city">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Type your city"
                      className="mt-1 p-1"
                    />
                  </div>
                  <div className="input-group d-flex flex-column ms-md-1 w-md-50 ms-md-1 mb-2 country">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Type your country"
                      className="mt-1 p-1"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div className="input-group d-flex flex-column justify-content-between w-md-50 me-md-1 mb-2 state-province">
                    <label htmlFor="state">State / Province</label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Type your state/province"
                      className="mt-1 p-1"
                    />
                  </div>
                  <div className="input-group d-flex flex-column justify-content-between w-md-50 ms-md-1 me-md-1 mb-2 postal-code">
                    <label htmlFor="postalCode">Postal code</label>
                    <input
                      type="text"
                      name="postalCode"
                      id="postalCode"
                      placeholder="Type your postal code"
                      className="mt-1 p-1"
                    />
                  </div>
                  <div className="input-group d-flex flex-column ms-md-1 mb-1 phone">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Type your phone"
                      className="mt-1 p-1"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p className="proxima-nova-bold darkgreen m-0 mb-3">Payment</p>
                <div>Radio</div>
                <div className="d-flex">
                  <div className="input-group d-flex flex-column me-1 mb-1 card-number">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      placeholder="Type your card number"
                      className="mt-1 p-1 "
                    />
                  </div>
                  <div className="input-group d-flex flex-column ms-1 me-1 mb-1 card-holder">
                    <label htmlFor="cardHolder">Card Holder</label>
                    <input
                      type="text"
                      name="cardHolder"
                      id="cardHolder"
                      placeholder="Type your card holder"
                      className="mt-1 p-1"
                    />
                  </div>
                  <div className="input-group d-flex flex-column ms-1 me-1 mb-2 expiration-date">
                    <label htmlFor="expirationDate">Expiration Date (MM/YY)</label>
                    <input
                      type="text"
                      name="expirationDate"
                      id="expirationDate"
                      placeholder="Type your expiration date"
                      className="mt-1 p-1 "
                    />
                  </div>
                  <div className="input-group d-flex flex-column justify-content-between ms-1 mb-2 cvc">
                    <label htmlFor="cvc">CVC</label>
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="Type your cvc code"
                      className="mt-1 p-1 "
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="form-button rounded-pill mb-2 shadow">Continue to checkout</button>
        <div>
          <Link to="/" className="proxima-nova-regular mediumgreen go-back fs-5">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
