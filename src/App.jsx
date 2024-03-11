import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Movies from './compoents/pages/movies';
import Home from './compoents/pages/home';
import Books from './compoents/pages/books';
import Characters from './compoents/pages/characters';
import hogwartsbg2 from './images/hogwartsbg2.png'; // Import the image

function App() {
  return ( 
    <Router>
      <div className="bg-gray-900 text-white">
        <nav className="flex justify-between items-center py-4 px-8 bg-cover bg-center" style={{backgroundImage: `url(${hogwartsbg2})`}}>
          <h1 className="text-2xl font-sans font-bold tracking-wider">PotterHeads</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors duration-300 ease-in-out text-xl">Home</Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-gray-300 transition-colors duration-300 ease-in-out text-xl">Movies</Link>
            </li>
            <li>
              <Link to="/books" className="hover:text-gray-300 transition-colors duration-300 ease-in-out text-xl">Books</Link>
            </li>
            <li>
              <Link to="/characters" className="hover:text-gray-300 transition-colors duration-300 ease-in-out text-xl">Characters</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='bg-cover bg-center bg-blur-md '  style={{backgroundImage: `url(${hogwartsbg2})`}}>
        <div className="container mx-auto px-6 py-4" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/books" element={<Books />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
