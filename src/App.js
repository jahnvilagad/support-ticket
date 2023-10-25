import { Children, useState } from 'react';
import './App.css';
// import { recipes } from './Data';
import React from 'react';
// import { sculptureList } from './Data';


function Panel({
  title,
  children,
  isActive,
  onShow

}){
  return(
    <section className='panel'>
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={onShow}>
            show
          </button>
        )}
    </section>
  )
}


function App() {
  const [activeIndex, SetactiveIndex] = useState(0);

  
  return (
    <>
     <h2>Almaty, Kazakhstan</h2>
     <Panel
      title="About"
      isActive={activeIndex === 0}
      onshow={() => SetactiveIndex(0)}
     >

      Lorem Ipsum
     </Panel>

     <Panel
      title="Etymology"
      isActive={activeIndex === 1}
      onshow={() => SetactiveIndex(1)}
     >

      Lorem Ipsum
     </Panel>
    </>
  );
}

export default App;
