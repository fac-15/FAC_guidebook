const tape = require("tape");
const dbBuild = require("../database/db_build.js");
const getData = require("../handlers/getData.js");

tape("is tape working IN TEST_DB", t => {
  t.equal(2, 2, "2 should equal 2");
  t.end();
});

tape("test getData function to get a name of restaurant", t => {
  dbBuild(function(err, res) {
    if (err) return console.log("ERROR IN DBBUILD: " + err);
    getData(function(err, res) {
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
