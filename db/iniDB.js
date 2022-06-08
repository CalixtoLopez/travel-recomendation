require('dotenv').config();
console.log(process.env);

const { getConnection } = require('./db');

async function main() {
  console.log('main');
  let connection;
  try {
    connection = await getConnection();
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) connection.release();
    process.exit(0);
  }
}
main();
