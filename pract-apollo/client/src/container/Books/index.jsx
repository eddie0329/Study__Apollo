import { gql, useQuery } from '@apollo/client';
import StateLoader from '../../wrapper/StateLoader';
import Book from './Book';
import BookAddInput from './BookAddInput';

export const BOOKS = gql`
  query GetBooks {
      books {
          title
          author {
              name
          }
      }
  }
`;

export default function Books() {
  const {loading, error, data} = useQuery(BOOKS);

  return (
    <StateLoader loading={loading} error={error}>
      <h1>Books</h1>
      <BookAddInput />
      <ul>
        {data?.books.map(bookInfo => <Book key={bookInfo.title} bookInfo={bookInfo} />)}
      </ul>
    </StateLoader>
  );
}



