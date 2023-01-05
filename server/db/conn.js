const mysql = require("mysql");

const conn = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "electricityapp",
});
conn.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

module.exports = conn;
