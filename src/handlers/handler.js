const fs = require("fs");
const path = require("path");
const request = require("request");
const getData = require('./getData');
const postData = require('./postData');
const qs = require('querystring');


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
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript"
  };

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
// ----------------------POST ROUTER------------
  const handlerSubmit = (req, res) => {
        var body = '';
        req.on('data', function (data) {
            body += data;
            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
        });
        req.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.
            console.log(post.address);
            postData(post.placeName, post.address, (err, response) => {
              if(err){
                return console.log(err, 'Error posting data');
              }
              res.end();
              
            })
  });
};

module.exports = {
  handlerHome,
  handlerPublic,
  handlerRestaurants,
  handlerSubmit
};
