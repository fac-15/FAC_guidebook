const fs = require("fs");
const dbConnection = require("./db_connection");
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

// const dbBuilder = () => {
//   const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
//   dbConnection.query(sql, (err, result) => {
//     if (err) {
//       console.log(err, "error");
//     } else {
//       console.log("database created");
//       dbConnection.end(() => {
//         console.log("connection closed");
//       });
//     }
//   });
// };

const dbBuilder = cb => dbConnection.query(sql, cb);

module.exports = dbBuilder;

//dbBuilder();

// module.exports = dbBuilder;
