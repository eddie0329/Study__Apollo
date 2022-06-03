import { ApolloClient, ApolloProvider as RealApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

export default function ApolloProvider({ children }) {
  return (
    <RealApolloProvider client={client}>
      {children}
    </RealApolloProvider>
  );
}