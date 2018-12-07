const tape = require("tape");
const dbBuild = require("../database/db_build.js");
const getData = require("../handlers/getData.js");

tape("test getData function to get a name of restaurant", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    getData.getRestData(function(err, res) {
      if (err) return console.log("ERROR IN GETDATA: " + err);
      t.equals(
        res[0].name,
        "The Faltering Fullback",
        "Name of first restaurant should be The Faltering Fullback"
      );
      t.end();
    });
  });
});

tape("test getData function to get address of restaurant", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    getData.getRestData(function(err, res) {
      if (err) return console.log("ERROR IN GETDATA: " + err);
      t.equals(
        res[1].location,
        "3 Stroud Green Rd, London N4 2DQ",
        "Location of second restaurant should be 3 Stroud Green Rd, London N4 2DQ"
      );
      t.end();
    });
  });
});
