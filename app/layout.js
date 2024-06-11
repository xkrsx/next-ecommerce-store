import './globals.css';
import Header from './common/Header/Header';

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
  title: { default: "Home | Bik E'Polo", template: "%s | Bik E'Polo" },
  description:
    'Probably the best destination for any Bike Polo equipment in the world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      //  className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        {children}
        <footer>Created by Kryzys</footer>
      </body>
    </html>
  );
}
