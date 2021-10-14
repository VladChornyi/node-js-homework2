const express = require("express");
const { appendFile } = require("fs");
const PORT = 8080;
const server = express();
server.get("/weather", (req, res) => {
  console.log("query", req.query);
  res.send(req.query);
});

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
