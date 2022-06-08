require('dotenv').config();
console.log(process.env);

const { getConnection } = require('./db');

async function main() {
  console.log('main');
  let connection;
  try {
    connection = await getConnection();
    console.log('delete tables');
    await connection.query(`DROP TABLE IF EXISTS vote_recomendation`);
    await connection.query(`DROP TABLE IF EXISTS recomendation`);
    await connection.query(`DROP TABLE IF EXISTS users`);
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) connection.release();
    process.exit(0);
  }
}
main();
