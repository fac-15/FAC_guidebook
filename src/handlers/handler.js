const fs = require("fs");
const path = require("path");
const request = require("request");

// ----------------------HOME ROUTE ------------also displays existing recommendations from DB----
const handlerHome = (request, response) => {
  const url = request.url;
  console.log(`requesting the home route, url: ${url}`);

  const filePath = path.join(__dirname, "..", "public", "index.html");
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

module.exports = {
  handlerHome
};
