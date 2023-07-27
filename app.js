const express = require("express");
const app = express();

const { graphqlHTTP } = require("express-graphql");

const dotenv = require("dotenv");
dotenv.config();

const graphQlSchema = require("./graphql/schema/schema");
const graphQlResolvers = require("./graphql/resolvers/index");

// for json
app.use(express.json());

// connection server
const PORT = process.env.PORT || 4000;

// databse connectivity
const DATABASE_URL = process.env.DATABASE_URL;
const connectDB = require("./config/connectdb");
connectDB(DATABASE_URL);

// graphql url
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("server start");
});
