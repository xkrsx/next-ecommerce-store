import './Footer.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="nav-bottom">
          <div className="nav-column">
            <Link href="/">
              <Image
                src="/images/logo-square50x50.webp"
                alt="Logo Bik E'Polo"
                width="50"
                height="50"
              />
            </Link>
          </div>
          <div className="nav-column">
            <h4>Buy</h4>
            <ul>
              <li>
                <Link href="/products/equipment">Equipment</Link>
              </li>
              <li>
                <Link href="/products/bike">Bike</Link>
              </li>
              <li>
                <Link href="/products/protection">Protection</Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <h4>Webshop</h4>
            <ul>
              <li>
                <Link href="/account">Account</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <h4>About</h4>
            <ul>
              <li>
                <Link href="/about/bike-polo">Bike polo</Link>
              </li>
              <li>
                <Link href="/about/bik-e-polo">Bik E'Polo</Link>
              </li>
              <li>
                <Link href="/about/author">Author</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="options">
          {/* <div className="payment-options"> */}
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
              </svg>
              {/* <span>Payment options</span> */}
              {/* </div>
          <div className="shipping-options"> */}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
