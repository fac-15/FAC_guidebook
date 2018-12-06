const handler = require("./handlers/handler");
var qs = require('querystring');


const router = (req, res) => {
  const url = req.url;
  if (req.method == 'POST') {
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
        console.log(post.address);
        console.log(post.placeName);



        // use post['blah'], etc.
    });
} else {
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
