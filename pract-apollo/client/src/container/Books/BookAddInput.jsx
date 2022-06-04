import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { BOOKS } from './index';
import { AUTHORS } from '../Authors';

const ADD_BOOK = gql`
  mutation AddBook($title: String, $author: String) {
      addBook(title: $title, author: $author) {
          title
          author {
              name
          }
      }
      
  }
`;

const initialBookInputState = {
  title: '',
  author: '',
};

export default function BookInput() {
  const [bookInfoInput, setBookInfoInput] = useState(initialBookInputState);
  // Refetch
  // const [addBook] = useMutation(ADD_BOOK, {
  //   refetchQueries: [
  //     {query: BOOKS},
  //     {query: AUTHORS}
  //   ]
  // });

  // TODO: cache modify https://www.apollographql.com/docs/react/data/mutations
  const [addBook] = useMutation(ADD_BOOK, {
    update(cache, { data: { addBook }}) {
      cache.modify({
        fields: {
          books(existingBooks = []) {
            const newBooksRef = cache.writeQuery({
              data: addBook,
              fragment: gql`
                fragment NewBook on Book {
                    title
                    author {
                        name
                    }
                }
              `
            })
            return [...existingBooks, newBooksRef];
          }
        }
      });
    }
  });

  const initInput = () => {
    setBookInfoInput(initialBookInputState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook({ variables: { title: bookInfoInput.title, author: bookInfoInput.author }});
    initInput();
  };

  const handleChangeInput = (e) => {
    setBookInfoInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder={'Enter book title'} name={'title'} value={bookInfoInput.title} onChange={handleChangeInput} />
      <input placeholder={'Enter author name'} name={'author'} value={bookInfoInput.author} onChange={handleChangeInput} />
      <button type={'submit'}>Submit</button>
    </form>
  );
}