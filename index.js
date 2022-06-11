const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server: server });

wss.on("connection", (ws) => {
  let now = new Date();

  console.log(now);
  console.log("A new client Connected!");
});

app.get("/loa", (req, res) => {
  let now = new Date();

  console.log(now);
  console.log(req.query.data);

  wss.clients.forEach((client) => {
    client.send(req.query.data);
  });

  res.end();
});

server.listen(8080, () => console.log(`Lisening on port: 8080`));
