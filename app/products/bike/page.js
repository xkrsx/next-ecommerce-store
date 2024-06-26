import './page.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getSingleCategoryProductsInsecure } from '../../../database/products';

export function generateMetadata() {
  return {
    title: `Bike products`,
    description: `Browse Bike category on Bik E'Polo and give yourself a treat!`,
  };
}

export default async function Bike() {
  const products = await getSingleCategoryProductsInsecure('bike');

  return (
    <div className="products-wrapper">
      <h1>Bike</h1>
      <div className="all-products">
        {products.map((product) => {
          if (product.category === 'bike') {
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
          return product;
        })}
      </div>
    </div>
  );
}
