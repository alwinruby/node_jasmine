var Express = require("express");

var app = Express();

app.get("/", (request, response) => {
  response.status(200).send("GoSweat");
});

app.get("/test", (request, response) => {
  response.status(500).send({ "message" : "GoSweat"});
});

var server = app.listen(3000, () => {
  console.log("Listening on port " + server.address().port + "...")
});

module.exports = server;
