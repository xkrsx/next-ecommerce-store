import './page.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProductsInsecure } from '../../../database/products';

export default async function Equipment() {
  const products = await getAllProductsInsecure();

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
        })}
      </div>
    </div>
  );
}
