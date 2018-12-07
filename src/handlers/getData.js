const dbConnection = require('../database/db_connection.js');

const getRestData = cb => {
  dbConnection.query(`SELECT * FROM restaurants`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};


const getUserData = cb => {
  dbConnection.query(`SELECT * FROM users`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};



module.exports = {
  getRestData,
  getUserData
};
