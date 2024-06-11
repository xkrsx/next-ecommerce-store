import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSingleProductInsecure } from '../../../database/products';

export async function generateMetadata(props) {
  const singleProduct = await getSingleProductInsecure(
    Number(props.params.productId),
  );

  return {
    title: `${singleProduct?.name} on Bik E'Polo`,
    description: `Buy ${singleProduct?.name} now at Bik E'Polo!`,
  };
}

export default async function ProductPage(props) {
  const product = await getSingleProductInsecure(
    Number(props.params.productId),
  );

  if (!product) {
    notFound();
  }
  // TODO change image names to id/slug

  return (
    <>
      <h1>{product.name}</h1>
      <div>
        <div key={`product-${product.id}`}>
          <Image
            src={`/images/products/${product.name}/1.webp`}
            alt={product.name}
            width={300}
            height={300}
          />
          <div>Name: {product.name}</div>
          <div>Category: {product.category}</div>
          <div>Price: {product.price} €</div>
          <div>Description:{product.description}</div>
        </div>
      </div>
    </>
  );
}
