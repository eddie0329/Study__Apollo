const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        title: String
        author: Author
    }

    type Author {
        name: String!
        books: [Book]
    }

    type Query {
        books: [Book!]!
        authors: [Author]
    }

    type Mutation {
        addBook(title: String, author: String): Book
    }
`;

const books = [
  {
    title: 'The Awakening',
    author: {
      name: 'Kate Chopin',
    }
  },
  {
    title: 'City of Glass',
    author: {
      name: 'Paul Auster',
    }
  },
];

const authors = [
  { name: 'Kate Chopin' },
  { name: 'Paul Auster' }
];

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const _author = { name: author };
      const _book = { title, author: _author };
      books.push(_book);
      authors.push(_author);
      return _book;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers, csrfPrevention: true });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});