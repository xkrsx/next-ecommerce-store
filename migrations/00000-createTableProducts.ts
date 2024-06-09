import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(50) NOT NULL,
      category varchar(30) NOT NULL,
      description varchar(1000) NOT NULL,
      price decimal(6, 2) NOT NULL,
      COUNT integer NOT NULL
    );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products`;
}
