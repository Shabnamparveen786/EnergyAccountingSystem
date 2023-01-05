const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("./db/conn");
const router = require("./routes/router");
// import cookieParser from "cookie-parser";
const cookieParser = require("cookie-parser");
const port = 3000;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log("server starts at port no :" + port);
});
