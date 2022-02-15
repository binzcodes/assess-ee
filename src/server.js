import express from "express";

import router from "./routes/index.js";

const server = express();

server.use("/", router);

console.log('NODE_ENV', process.NODE_ENV);

export default server;
