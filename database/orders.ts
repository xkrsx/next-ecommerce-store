import { cache } from 'react';
import { Order } from '../migrations/00004-createTableOrders';
import { sql } from './connect';

export const getAllOrdersInsecure = cache(async () => {
  const products = await sql<Order[]>`
    SELECT
      *
    FROM
      orders
  `;

  return products;
});

export const getSingleOrderInsecure = cache(async (id: number) => {
  const [product] = await sql<Order[]>`
    SELECT
      *
    FROM
      orders
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
