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
  return (
    <>
      <h1>{product.name}</h1>
      <div>
        <div key={`product-${product.id}`}>
          <Image src={' '} alt="" width={300} height={300} />
          <div>{product.name}</div>
          <div>{product.category}</div>
          <div>price: {product.price}</div>
          <div>quantity: {product.count}</div>
          <div>{product.description}</div>
        </div>
      </div>
    </>
  );
}
