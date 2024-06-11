import { Sql } from 'postgres';
import { Product } from './00000-createTableProducts';

const category = {
  equipment: 'equipment',
  bike: 'bike',
  protection: 'protection',
};

const products: Product[] = [
  {
    id: 1,
    name: 'mallet',
    category: category.equipment,
    description: 'mallet',
    price: 20,
    count: 20,
  },
  {
    id: 2,
    name: 'bike',
    category: category.bike,
    description: 'bike',
    price: 400,
    count: 10,
  },
  {
    id: 3,
    name: 'helmet',
    category: category.protection,
    description: 'helmet',
    price: 50,
    count: 10,
  },
  {
    id: 4,
    name: 'ball',
    category: category.equipment,
    description: 'ball',
    price: 5,
    count: 30,
  },
  {
    id: 5,
    name: 'goal',
    category: category.equipment,
    description: 'goal',
    price: 60,
    count: 5,
  },
  {
    id: 6,
    name: 'gloves',
    category: category.protection,
    description: 'gloves',
    price: 40,
    count: 10,
  },
  {
    id: 7,
    name: 'front brake',
    category: category.bike,
    description: 'front brake',
    price: 65,
    count: 5,
  },
];

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
