import React, { useState, useEffect } from 'react';
import axios from 'axios';
import chardefault from '../../images/chardefault.png';
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [displayedCharacters, setDisplayedCharacters] = useState(18);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.potterdb.com/v1/characters');
        const charactersData = response.data.data;
        setCharacters(charactersData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleToggleDetails = (character) => {
    if (selectedCharacter === character) {
      setSelectedCharacter(null);
    } else {
      setSelectedCharacter(character);
    }
  };

  const handleLoadMore = () => {
    setDisplayedCharacters(prevCount => prevCount + 18);
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
      <h1 className="text-5xl font-bold mb-16 justify-center text-center">Harry Potter Characters</h1>
      <div className="grid grid-cols-3 gap-8">
        {characters.slice(0, displayedCharacters).map(character => (
          <div key={character.id} className="flex flex-col items-center border border-white rounded-lg p-4">
            <img src={character.attributes.image || chardefault} alt={character.attributes.name} className="w-64 h-64 object-cover rounded-lg" />
            <h2 className="text-xl font-bold my-4">{character.attributes.name}</h2>
            <button onClick={() => handleToggleDetails(character)} className="bg-blue-500 text-white px-4 py-2 rounded-md">More Details</button>
            {selectedCharacter === character && (
              <div className="mt-4 text-left">
                <p><strong>Alias Names:</strong> {character.attributes.alias_names.join(', ')}</p>
                <p><strong>Animagus:</strong> {character.attributes.animagus}</p>
                <p><strong>Blood Status:</strong> {character.attributes.blood_status}</p>
                {/* Add more attributes here */}
              </div>
            )}
          </div>
        ))}
      </div>
      {characters.length > displayedCharacters && (
        <div className="flex justify-center mt-8">
          <button onClick={handleLoadMore} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Load More</button>
        </div>
      )}
    </div>
  );
};

export default Characters;
