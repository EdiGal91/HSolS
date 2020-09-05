require('dotenv').config()
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { logRequest } = require("./middlewares");
const { connect: connectToDB } = require("./models");
const app = express();

app.use(cors());
app.use(express.json());
app.use(logRequest);

app.use("/api", routes);

connectToDB().then(startServer);

function startServer(isConnectedToDB) {
  if (!isConnectedToDB) return console.log('Cannot connect to DB');
  console.log('Connected to DB')
  
  const { PORT: port = 3001 } = process.env;
  app.listen(port, console.log(`server is runing on port ${port}`));
}
