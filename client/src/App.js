import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// Create a client and define the graphql endpoint from which Apollo will get the data
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

function App() {
  return (
    // Inject the graphQL data inside our React app
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <div>
        <BookList />
        <AddBook />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
