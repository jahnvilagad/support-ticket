import { useState } from 'react';
import './App.css';
// import { recipes } from './Data';
import React from 'react';
// import { sculptureList } from './Data';


let nextId = 0;


function App() {
  const [name, Setname] = useState('');
  const [artists, setartists] = useState([]);

  return (
    <>
     <h1>Inspiring sculptors:</h1>
     <input value={name} onChange={e => Setname(e.target.value)}/>
     <button onClick={() => {
      setartists([
        ...artists,
        {id: nextId++, name: name }
      ]);
     }}>Add</button>
     <ul>
      {artists.map(artist => (
        <li key={artist.id}>{artist.name}</li>
      ))}
     </ul>
    </>
  );
}

export default App;
