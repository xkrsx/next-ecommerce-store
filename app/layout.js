import './globals.css';
import Link from 'next/link';

// import localFont from 'next/font/local';
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata = {
  title: { default: "%Home | Bik E'Polo", template: "%s | Bik E'Polo" },
  description:
    'Probably the best destination for any Bike Polo equipment in the world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      //  className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/account">Account</Link>
            <Link href="/cart">Cart</Link>
          </nav>
        </header>
        {children}
        <footer>Created by Kryzys</footer>
      </body>
    </html>
  );
}
