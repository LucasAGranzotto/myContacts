/* eslint-disable no-console */
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

exports.query = async (sqlQuery, values) => {
  try {
    const { rows } = await client.query(sqlQuery, values);
    return rows;
  } catch (err) {
    console.log(err.stack);
    return [];
  }
};
