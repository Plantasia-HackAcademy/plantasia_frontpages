import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav-bar">
        <figure className="footer__logo-wrapper">
          <img
            className="footer__logo"
            src="/public/images/Plantasia-white.svg"
            alt="Plantasia logo"
          />
        </figure>

        <ul className="footer__links-wrapper">
          <input
            className="footer__links-wrapper-checkbox"
            type="checkbox"
            name="shop-links-display"
            id="shop-links-display"
          />
          <label className="footer__links-wrapper-btn" htmlFor="shop-links-display"></label>
          <li className="footer__links-wrapper-title">Shop</li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              All houseplants
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              All Baby houseplants
            </a>
          </li>

          <li className="footer__links-wrapper-title">My account</li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="/login">
              Log in
            </a>
          </li>
        </ul>

        <ul className="footer__links-wrapper">
          <input
            className="footer__links-wrapper-checkbox"
            type="checkbox"
            name="customer-links-display"
            id="customer-links-display"
          />
          <label className="footer__links-wrapper-btn" htmlFor="customer-links-display"></label>
          <li className="footer__links-wrapper-title">Customer service</li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Frequently asked questions
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Contact
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Payments
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Transport and delivery
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Guarantee
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Return policy
            </a>
          </li>
        </ul>

        <ul className="footer__links-wrapper">
          <input
            className="footer__links-wrapper-checkbox"
            type="checkbox"
            name="about-links-display"
            id="about-links-display"
          />
          <label className="footer__links-wrapper-btn" htmlFor="about-links-display"></label>
          <li className="footer__links-wrapper-title">About PLNTS</li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Giftcard
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              About us
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Sustainability
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Meet the creators
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              B2B
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Collaborations
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Press
            </a>
          </li>
          <li className="footer__links-wrapper-item">
            <a className="footer__links-wrapper-item-link" href="#">
              Job opportunities
            </a>
          </li>
        </ul>
        <a className="footer__log-in-link" href="/login">
          Log in
        </a>

        <ul className="footer__social-media-links-wrapper">
          <li className="footer__social-media-links-wrapper-item">
            <a className="footer__social-media-links-wrapper-link" href="#">
              <i className="footer__social-media-links-wrapper-icon bi bi-instagram"></i>
            </a>
          </li>
          <li className="footer__social-media-links-wrapper-item">
            <a className="footer__social-media-links-wrapper-link" href="#">
              <i className="footer__social-media-links-wrapper-icon bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
