import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

const Home = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
    },
    {
      id: 4,
      title: 'Book 4',
      author: 'Author 4',
    },
  ]);

  const handleDelete = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const handleSubmit = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <BookList books={books} onDelete={handleDelete} />
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
