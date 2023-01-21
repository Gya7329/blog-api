const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const blogRouter = require("./routes/blog.routes");
const { db_connect } = require("./db_connection");
app.use(cors());

//middlerware

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  next();
});
require("dotenv").config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const URL = process.env.MONGODB_URI;
const port = process.env.PORT;

app.use("/v1/blog", blogRouter);

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send("BLOG API RUNNING");
});

app.listen(4800, () => {
  console.log(`Listening on port ${port}`);
  db_connect(URL);
});
