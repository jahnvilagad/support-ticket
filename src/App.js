import { useState } from 'react';
import './App.css';
// import { recipes } from './Data';
import React from 'react';
import { sculptureList } from './Data';


function App() {
  const [index, SetIndex] = useState(0);
  const [showMore, setshowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextclick() {
    if (hasNext) {
      SetIndex(index + 1);
    } else {
      SetIndex(0);
    }
  }

  function handleMoreclick() {
    setshowMore(!showMore);
  }


  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextclick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreclick}>
        {showMore ? 'Hide' : 'show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}

export default App;
