import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src="/public/assets/images/Plantasia-white.svg" alt="Plantasia logo" />

      <div className='footer__links-wrapper'>
        <ul className='footer__shop-links-wrapper'>
          <li className='footer__links-title'>Shop</li>
          <li className='footer__link-item'><a className='footer__link' href="#">All houseplants</a></li>
          <li className='footer__link-item'><a className='footer__link' href="#">All Baby houseplants</a></li>
        </ul>

        <ul className='footer__my-account-links-wrapper'>
          <li className='footer__links-title'>My account</li>
          <li className='footer__link-item'><a className='footer__link' href="/login">Log in</a></li>
        </ul>
      </div>

      <ul className='footer__links-wrapper'>
        <li className='footer__links-title'>Customer service</li>
        <li className='footer__link-item'><a className='footer__link' href="#">Frequently asked questions</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Contact</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Payments</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Transport and delivery</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Guarantee</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Return policy</a></li>
      </ul>

      <ul className='footer__links-wrapper'>
        <li className='footer__links-title'>About PLNTS</li>
        <li className='footer__link-item'><a className='footer__link' href="#">Giftcard</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">About us</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Sustainability</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Meet the creators</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">B2B</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Collaborations</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Press</a></li>
        <li className='footer__link-item'><a className='footer__link' href="#">Job opportunities</a></li>
      </ul>

      <div className='footer__social-media-links-wrapper'>
        <li className='footer__link-item'><a className='footer__link-icon' href="#">IG</a></li>
        <li className='footer__link-item'><a className='footer__link-icon' href="#">FB</a></li>
        <li className='footer__link-item'><a className='footer__link-icon' href="#">YT</a></li>
        <li className='footer__link-item'><a className='footer__link-icon' href="#">TW</a></li>
      </div>
    </footer>
  )
}