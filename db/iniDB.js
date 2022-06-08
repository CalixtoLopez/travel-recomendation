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
    console.log('create tables');
    await connection.query(`CREATE TABLE users(
                          id INT PRIMARY KEY AUTO_INCREMENT,
                          name VARCHAR(80),
                          email VARCHAR(100) UNIQUE NOT NULL,
                          password VARCHAR(512) NOT NULL
    )`);
    await connection.query(`CREATE TABLE reacomendation()`);
    await connection.query(`CREATE TABLE vote_recomendation()`);
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) connection.release();
    process.exit(0);
  }
}
main();
