import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

export default defaultClient;
