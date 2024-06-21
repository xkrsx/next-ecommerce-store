import './page.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProductsInsecure } from '../../../database/products';

export function generateMetadata() {
  return {
    title: `Protection products`,
    description: `Browse protection category on Bik E'Polo and give yourself a treat!`,
  };
}

export default async function Protection() {
  const products = await getAllProductsInsecure();

  // TODO solve map issue with no return

  return (
    <div className="products-wrapper">
      <h1>Protection</h1>
      <div className="all-products">
        {products.map((product) => {
          if (product.category === 'protection') {
            return (
              <div className="single-product" key={`product-${product.id}`}>
                <Link href={`/products/${product.id}`}>
                  <div className="product-image">
                    <Image
                      src={`/images/products/${product.name}/1.webp`}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="product-name">{product.name}</div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
