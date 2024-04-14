const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to our home page  ");
    return;
  }
  if (request.url === "/about") {
    response.end("welcome to about page");
    return;
  }
  response.end(
    `<h1>OOps !</h1><p>We can't seem to find the page you are looking for</p><a href="./">back home</a>`
  );
});

server.listen(5000, () => {
  console.log("server started at port 5000.");
});
