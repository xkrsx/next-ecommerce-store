import { cache } from 'react';
import { sql } from './connect';

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  count: number;
};

export const getAllProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;

  return products;
});

export const getSingleProductInsecure = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;

  return product;
});

// TODO add other functions: create, update, delete for products
