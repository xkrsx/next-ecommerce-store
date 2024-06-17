import { Sql } from 'postgres';
import { products } from '../database/productsExample';

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (
          name,
          category,
          description,
          price,
          COUNT
        )
      VALUES
        (
          ${product.name},
          ${product.category},
          ${product.description},
          ${product.price},
          ${product.count}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        products.id = ${product.id}
    `;
  }
}
