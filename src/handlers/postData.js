const databaseConnection = require('../database/db_connection');

const postDataRest = (name, location, review, img_url, cb) => {
    databaseConnection.query(
        'INSERT INTO restaurants (name, location, review, img_url) VALUES ($1, $2, $3, $4)',
        [name, location, review, img_url],
        (err, res) => {
            if(err) {
                return cb(err);
            } else {
                cb(null, res);
            }
        }
    );
};

const postDataUser = (name, github_username, cb) => {
    databaseConnection.query(
        'INSERT INTO users (name, github_username) VALUES ($1, $2)',
        [name, github_username],
        (err, res) => {
            if(err) {
                return cb(err);
            } else {
                cb(null, res);
            }
        }
    );
};




module.exports = {
    postDataRest,
    postDataUser
}