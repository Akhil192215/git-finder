const express = require("express");
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/index')
const donenv = require("dotenv").config()
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " http://localhost:3000", credentials: true }));
app.use(cors());

app.get("/", async (req, res) => {
  res.send("hello exprss");
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log("server connected");
});
