import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultClient = new ApolloClient({
  // 서버의 uri를 지정을 해주게 됩니다.
  uri: "http://localhost:4000/graphql/",
  cache: new InMemoryCache(),
});

export default defaultClient;
