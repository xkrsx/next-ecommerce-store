import './page.scss';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSingleProductInsecure } from '../../../database/products';
import AddToCart from '../../common/AddToCart/AddToCart';

export async function generateMetadata(props) {
  const singleProduct = await getSingleProductInsecure(
    Number(props.params.productId),
  );

  return {
    title: `Buy a new ${singleProduct?.name} on Bik E'Polo`,
    description: `Get your new ${singleProduct?.name} from Bik E'Polo now and enjoy your game even more.`,
  };
}

export default async function ProductPage(props) {
  const product = await getSingleProductInsecure(
    Number(props.params.productId),
  );

  if (!product) {
    notFound();
  }
  // TODO change product url to slug

  return (
    <div className="product-wrapper">
      <div className="product">
        <div className="product-url-name">
          <div className="url-path">
            <span>
              <Link href="/products"> all products </Link>
              {'>'}
              <Link href={`/products/${product.category}`}>
                {' '}
                {product.category}{' '}
              </Link>
            </span>
          </div>
          <h1>{product.name}</h1>
        </div>
        <div className="product-image-info">
          <div className="product-image">
            <Image
              src={`/images/products/${product.name}/1.webp`}
              alt={`Image of ${product.name}`}
              layout="fill"
              objectFit="contain"
              data-test-id="product-image"
            />
          </div>
          <div className="product-info-add-to-cart">
            <div className="product-info">
              <ul>
                <li>
                  Name: <strong className="product-name">{product.name}</strong>
                </li>
                <li>
                  Category:{' '}
                  <Link
                    className="product-category"
                    href={`/${product.category}`}
                  >
                    {product.category}
                  </Link>
                </li>
                <li>
                  Price:{' '}
                  <strong
                    className="product-price"
                    data-test-id="product-price"
                  >
                    {product.price}
                  </strong>{' '}
                  €
                </li>
                <li>
                  In stock:{' '}
                  <strong className="product-count">{product.count}</strong>
                </li>
                <li>
                  Description:{' '}
                  <p className="product-description">{product.description}</p>
                </li>
              </ul>
            </div>
            <AddToCart
              stockCount={product.count}
              productId={Number(props.params.productId)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
