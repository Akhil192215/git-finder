const express = require("express");
const app = express();
const router = require("./routes");
const donenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " http://localhost:3000", credentials: true }));

const PORT = process.env.PORT || 5500;
app.get("/", async (req, res) => {
  res.send("hello exprss");
});
app.use(router);
app.listen(PORT, () => {
  axios;
  console.log("server connected");
});
