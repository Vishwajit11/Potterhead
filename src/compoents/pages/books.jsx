import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [selectedBookChapters, setSelectedBookChapters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.potterdb.com/v1/books');
        const booksData = response.data.data;
        setBooks(booksData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFetchChapters = async (bookId) => {
    if (bookId === selectedBookId) {
      setSelectedBookId(null);
      setSelectedBookChapters([]);
    } else {
      try {
        const response = await axios.get(`https://api.potterdb.com/v1/books/${bookId}/chapters`);
        setSelectedBookId(bookId);
        setSelectedBookChapters(response.data.data);
      } catch (error) {
        console.error('Error fetching chapters:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-6xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-900 text-white p-8 rounded-3xl">
      <h1 className="text-5xl font-bold mb-16 justify-center text-center">Harry Potter Books</h1>
      {books.map(book => (
        <div key={book.id} className="flex mb-8">
          <div className="mr-16 ml-10">
            {book.attributes.cover && <img src={book.attributes.cover} alt="Book Cover" style={{ width: '900px', height: 'auto' }} className='rounded-lg shadow-lg' />}
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">{book.attributes.title}</h2>
            <p className="text-lg"><strong>Author:</strong> {book.attributes.author}</p>
            <p className="text-lg"><strong>Release Date:</strong> {book.attributes.release_date}</p>
            <p className="text-lg"><strong>Pages:</strong> {book.attributes.pages}</p>
            <p className="text-lg"><strong>Summary:</strong> {book.attributes.summary}</p>
            <button onClick={() => handleFetchChapters(book.id)} className="mt-4 bg-blue-500 text-white px-4 py-2  text-lg rounded-md">Chapters</button>
            {selectedBookId === book.id && selectedBookChapters.map((chapter, index) => (
              <div key={chapter.id}>
                <h3 className="text-2xl font-bold mt-4">{index + 1}. {chapter.attributes.title}</h3>
                  </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
