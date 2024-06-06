import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

console.log(
  await sql`
  CREATE TABLE `,
);

// TODO remove end() before deployment
await sql.end();
