const sql = require("mysql");

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("successfully connected");
});
module.exports = db;
