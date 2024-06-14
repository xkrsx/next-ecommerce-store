import { cache } from 'react';
import { Product } from '../migrations/00000-createTableProducts';
import { sql } from './connect';

export const getAllProductsInsecure = cache(async () => {
  const products = await sql<Product[]>`
    SELECT
      *
    FROM
      products
  `;

  return products;
});

export const getSingleCategoryProductsInsecure = cache(
  async (category: string) => {
    const products = await sql<Product[]>`
      SELECT
        *
      FROM
        products
      WHERE
        category = ${category}
    `;

    return products;
  },
);

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

// export const createProductInsecure = cache(
//   async (newProduct: Omit<Product, 'id'>) => {
//     const [product] = await sql<Product[]>`
//       INSERT INTO
//         products (
//           name,
//           category,
//           description,
//           price,
//           COUNT
//         )
//       VALUES
//         (
//           '${newProduct.name}',
//           '${newProduct.category}',
//           '${newProduct.description}',
//           ${newProduct.price},
//           ${newProduct.count}
//         )
//       RETURNING
//         products.*
//     `;
//     return product;
//   },
// );
