import { Sql } from 'postgres';

export type Order = {
  id: number | null;
  customerId: number | null;
  status: string | null;
  products: string | null;
  date: Date | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE orders (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      customer_id integer NOT NULL,
      status varchar(50) NOT NULL,
      products varchar(1000) NOT NULL,
      date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE orders`;
}
