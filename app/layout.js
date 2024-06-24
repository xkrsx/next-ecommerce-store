import './globals.css';
import './layout.scss';
import Footer from './common/Footer/Footer';
import Header from './common/Header/Header';

export const metadata = {
  title: { default: "Home | Bik E'Polo", template: "%s | Bik E'Polo" },
  description:
    'Probably the best destination for any Bike Polo equipment in the world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header className="header" />
        <div className="main-content">{children}</div>
        <Footer className="footer" />
      </body>
    </html>
  );
}
