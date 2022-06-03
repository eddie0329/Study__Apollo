import { memo } from 'react';

const Book = memo(function ({ bookInfo }) {
  return (
    <li>
      <span><strong>{bookInfo.title}</strong> by.{bookInfo.author.name}</span>
    </li>
  );
});

export default Book;