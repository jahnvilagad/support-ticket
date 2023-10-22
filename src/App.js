// import { Profiler } from 'react';
import './App.css';
// import Header from './Components/Header/Header';
import { recipes } from './Data';

// function Person()  {
//     return (
//       <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
//     )
// }


function App() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
