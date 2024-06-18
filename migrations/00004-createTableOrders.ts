import { Sql } from 'postgres';

export type Order = {
  id: number;
  customerId: string;
  status: string;
  products: string;
  date: Date;
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
