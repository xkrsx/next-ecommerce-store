import Image from 'next/image';
import Link from 'next/link';
import { getAllProductsInsecure } from '../../database/products';

export default async function Products() {
  const products = await getAllProductsInsecure();
  return (
    <>
      <h1>all products</h1>
      <div>
        {products.map((product) => {
          return (
            <div key={`product-${product.id}`}>
              <Link href={`/products/${product.id}`}>
                <div>{product.name}</div>
                <Image
                  src={`/images/products/${product.name}/1.webp`}
                  alt={product.name}
                  width={300}
                  height={300}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
