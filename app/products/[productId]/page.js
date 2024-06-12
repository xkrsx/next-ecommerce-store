import './page.scss';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSingleProductInsecure } from '../../../database/products';
import AddToCart from '../../common/AddToCart/page';

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
  // TODO change image url to id/slug

  return (
    <div className="product-wrapper">
      <div className="product">
        <div className="product-url-name">
          <div className="url-path">
            <span>
              <Link href="/products"> all products </Link>
              {'>'}
              <Link href={`/${product.category}`}> {product.category} </Link>
            </span>
          </div>
          <h1>{product.name}</h1>
        </div>
        <div className="product-image-info">
          <div className="product-image">
            <Image
              src={`/images/products/${product.name}/1.webp`}
              alt={product.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="product-info-add-to-cart">
            <div className="product-info">
              <ul>
                <li>Name: {product.name}</li>
                <li>Category: {product.category}</li>
                <li>Price: {product.price} €</li>
                <li>Description: {product.description}</li>
              </ul>
            </div>
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
}
