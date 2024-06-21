import { Sql } from 'postgres';

export type User = {
  id: number;
  role: string;
  username: string;
  firstName: string;
  lastName: string;
  mail: string;
  phone: number;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  postcode: string;
  city: string;
  country: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      role varchar(30) NOT NULL,
      username varchar(50) NOT NULL,
      first_name varchar(30) NOT NULL,
      last_name varchar(50) NOT NULL,
      mail varchar(50) NOT NULL,
      phone bigint NOT NULL,
      street varchar(50) NOT NULL,
      house_number varchar(20) NOT NULL,
      apartment_number varchar(20),
      postcode varchar(20) NOT NULL,
      city varchar(50) NOT NULL,
      country varchar(50) NOT NULL
    );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE users`;
}
