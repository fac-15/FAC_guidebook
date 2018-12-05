const fs = require("fs");
const dbConnection = require("./db_connection");

const dbBuilder = () => {
  const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
  dbConnection.query(sql, (err, result) => {
    if (err) {
      console.log(err, "error");
    } else {
      console.log("database created");
      dbConnection.end(() => {
        console.log("connection closed");
      });
    }
  });
};

dbBuilder();

module.exports = dbBuilder;
