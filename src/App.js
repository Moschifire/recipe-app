import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=56110c6e&app_key=ae9bd981dbe1ff09ea106fc8acd90fe1");
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" />
        <button className='search-button' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default App;
