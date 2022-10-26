import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Characters from './components/Characters';
import Pagination from './components/Pagination';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fecthCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fecthCharacters(info.prev);

  }

  const onNext = () => {
    fecthCharacters(info.next);

  }

  useEffect(() => {
    fecthCharacters(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty App" />

      <div className="container mt-5">
        <Pagination 
        prev={info.prev}
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext} />
        <Characters characters={characters} />
        <Pagination         
        prev={info.prev}
        next={info.next} 
        onPrevious={onPrevious} 
        onNext={onNext}/>
      </div>

    </>

  );
};

export default App;
