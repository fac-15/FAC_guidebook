const handler = require("./handlers/handler");

const router = (req, res) => {
  const url = req.url;
  
// ****************************POST METHOD********************
  if (req.method == 'POST') {
    handler.handlerSubmit(req, res);
} 
// *******************GET METHOD***********************
else {
  if (url === "/") {
    handler.handlerHome(req, res);
  } else if (url === '/restaurants') {
    handler.handlerRestaurants(req, res);
  } else if (url.indexOf("public") !== -1) {
    handler.handlerPublic(req, res, url);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 not found!");
  }
}

};

module.exports = router;
