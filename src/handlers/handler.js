const fs = require("fs");
const path = require("path");
const request = require("request");
const getData = require('./getData');

// ----------------------HOME ROUTE ------------also displays existing recommendations from DB----
const handlerHome = (request, response) => {
  const url = request.url;
  console.log(`requesting the home route, url: ${url}`);

  const filePath = path.join(__dirname, "..", "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(`Error: ${error}`);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we'v had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

// ----------------------PUBLIC ROUTE ------------
const handlerPublic = (request, response, url) => {
  console.log(`requesting the public route, url: ${url}`);
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
  }

  const filePath = path.join(__dirname, "..", "..", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(`Error: ${error}`);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we'v had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": extensionType[extension] });
      response.end(file);
    }
  });
};

    const handlerRestaurants = (request, response) => {
        getData((err, res) => {
          if (err) {
            return console.log(err, "error");
          }
          const restaurantsData = JSON.stringify(res);
          response.writeHead(200, {'Content-Type': 'application/json'});
          response.end(restaurantsData);
        });
    }




module.exports = {
  handlerHome,
  handlerPublic,
  handlerRestaurants
};
