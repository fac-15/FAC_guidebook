const databaseConnection = require('../database/db_connection');

const postData = (name, location, cb) => {
    databaseConnection.query(
        'INSERT INTO restaurants (name, location) VALUES ($1, $2)',
        [name, location],
        (err, res) => {
            if(err) {
                return cb(err);
            } else {
                cb(null, res);
            }
        }
    );
};

module.exports = postData;