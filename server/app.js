require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Book = require("./resolvers/Book");
const Author = require("./resolvers/Author");
const mongoose = require("mongoose");
const cors = require("cors");

const schemaFile = path.join(__dirname, "./schema/schema.graphql");
const typeDefs = fs.readFileSync(schemaFile, "utf8");
const resolvers = { Query, Mutation, Book, Author };
const schema = makeExecutableSchema({ typeDefs, resolvers });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("Connected to database"));

const app = express();
app.use(cors());

// Express doesn't know how to communicate with graphql,
// So when facing this route, express will pass the request to express-graphql to handle graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Server is up on port 4000"));
