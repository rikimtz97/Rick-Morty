import React, {useEffect, useState} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState([]);
  const initialUrl = "https://rickandmortyapi.com/api/character"
  const fecthCharacter = (Initialurl) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error)) 
};

useEffect(() => {
fecthCharacter(initialUrl);
}, [])

  return (
    <>
    <Navbar brand="Rick and Morty App"/> 

    <div className="container">
    <Characters characters = {characters}/>
    </div>


</>


);
};

export default App;
