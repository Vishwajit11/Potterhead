import React from 'react';
import { Link } from 'react-router-dom';
import hogwartsbg2 from '../../images/hogwartsbg2.png';
import hplogo from '../../images/hplogo.png';
import movies from '../../images/movies.jpg';
const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Content */}
      {/* <div className="bg-cover bg-center h-full flex flex-col items-center justify-center relative" style={{backgroundImage: `url(${hogwartsbg})`, borderRadius: "20px", boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.9)"}}> */}
      <div className="bg-cover bg-center h-full flex flex-col items-center justify-center relative" style={{backgroundImage: `url(${hogwartsbg2})`,borderRadius: "20px", boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.9)"}}>
     
        <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div> Black shadow layer
        <div className="relative z-10" style={{marginTop: "-650px"}}>
          <img src={hplogo} width="550" alt="PotterHeads" />
        </div>
      </div>
      {/* Footer */}
      <footer className="absolute bottom-1 right-10 text-white opacity-40">
        <p>Created by <a href="https://github.com/Vishwajit11" target="_blank" rel="noopener noreferrer">Vishwajit11</a></p>
      </footer>
      {/* Links */}
      <div className="absolute bottom-40 flex space-x-40 justify-center w-full">
        {/* Movie Link */}
        <Link to="/movies" className="w-80 h-96 bg-cover bg-center border border-gray-300  relative" style={{backgroundImage: `url(${movies})` , transition: "transform 0.3s"}}>
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity rounded-3xl flex items-center justify-center">
            <span className="text-white text-center text-4xl font-bold">Movies</span>
          </div>
        </Link>
        {/* Book Link */}
        <Link to="/books" className="w-80 h-96 bg-cover bg-center border border-gray-300 relative" style={{backgroundImage: "url('https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg')", transition: "transform 0.3s"}}>
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity rounded-3xl flex items-center justify-center">
            <span className="text-white text-center text-4xl font-bold">Books</span>
          </div>
        </Link>
        {/* Character Link */}
        <Link to="/characters" className="w-80 h-96 bg-cover bg-center border border-gray-300 relative" style={{backgroundImage: "url('https://wallpapers.com/images/hd/harry-potter-background-wi51ojw1dy2cq960.jpg')", transition: "transform 0.3s"}}>
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity rounded-3xl flex items-center justify-center">
            <span className="text-white text-center text-4xl font-bold">Characters</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
