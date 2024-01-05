const mysql = require("mysql2");

const client = {
  host: "localhost",
  port: 3300,
  user: "root",
  database: "booked_db",
  password: "@adminDeveloper",
  multipleStatements: true
}

const connection = mysql.createConnection(client);

const connectDb = () => {
  connection.connect(err => {
    if(err) {
      process.on('uncaughtException', (err) => {
        console.error('Uncaught Exception:', err);
        process.exit(1);
      });
    };
    console.log("Database connected...");
  });
};

module.exports = { connectDb, connection }
