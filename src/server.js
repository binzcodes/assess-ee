import express from "express";

import router from "./routes/index.js";

const server = express();

server.use("/", router);

// basic express error handling
server.use((err, req, res) => {
  console.error(err);
  res.status(500).send({ message: "Internal server error" });
})

export default server;
