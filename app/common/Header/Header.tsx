import './Header.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="nav left">
          <ul className="list left">
            <li>
              <Link href="/products">all products</Link>
            </li>
            <li>
              <Link href="/products/equipment">equip</Link>
            </li>
            <li>
              <Link href="/products/bike">bike</Link>
            </li>
            <li>
              <Link href="/products/protection">protect</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <span>Bik E'Polo</span>
        </div>
        <div className="nav right">
          {/* <Link href="/dark-mode">Home</Link> */}
          <ul className="list right">
            <li>
              <Link href="/about">about icon</Link>
            </li>
            <li>
              <Link href="/account">account icon</Link>
            </li>
            <li>
              <Link href="/wishlist">wishlist icon</Link>
            </li>
            <li>
              <Link href="/cart">cart icon</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
