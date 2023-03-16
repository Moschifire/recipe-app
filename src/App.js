import React from 'react';
import './App.css';

const App = () => {

  /* const APP_ID = '56110c6e';
  const APP_KEY = 'ae9bd981dbe1ff09ea106fc8acd90fe1'; */
  const reqUrl = "https://api.edamam.com/api/recipes/v2?type=public&app_id=56110c6e&app_key=ae9bd981dbe1ff09ea106fc8acd90fe1"

  return (
    <div className='App'>
      <form>
        <input type="text" />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default App;
