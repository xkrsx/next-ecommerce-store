import { sql } from './connect';

export async function getAllProducts() {
  const products = await sql<Product[]>`
  SELECT
  *
  FROM
  products`
}
