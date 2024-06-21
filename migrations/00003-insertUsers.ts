import { Sql } from 'postgres';
import { users } from '../database/usersExample';

export async function up(sql: Sql) {
  for (const user of users) {
    await sql`
      INSERT INTO
        users (
          role,
          username,
          first_name,
          last_name,
          mail,
          phone,
          street,
          house_number,
          apartment_number,
          postcode,
          city,
          country
        )
      VALUES
        (
          ${user.role},
          ${user.username},
          ${user.firstName},
          ${user.lastName},
          ${user.mail},
          ${user.phone},
          ${user.street},
          ${user.houseNumber},
          ${user.apartmentNumber},
          ${user.postcode},
          ${user.city},
          ${user.country}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const user of users) {
    await sql`
      DELETE FROM users
      WHERE
        users.id = ${user.id}
    `;
  }
}
