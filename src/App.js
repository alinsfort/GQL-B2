import './App.css';
import { UseGetCharacter } from './hooks/useGetCharacter';

import { UseGetCharacters } from './hooks/useGetCharacters';
import Search from './Search';

import { AppContext, useAppContext } from './context';
import { useContext, useEffect } from 'react';

function App() {

  // Getting All The Characters
  const {error, loading, data} = UseGetCharacters();
 
  // Getting A Single Character
  const {error:e, loading:l, data:d} = UseGetCharacter(2);

  // Using context api cause need global value
  const {found, data:foundData} = useContext(AppContext); 
  

  return (
    <div className="App">
  
        <h1>App 2</h1>
        {/* For All The Characters */}
        {error && <p>There was an error</p>}
        {loading && <p>Loading...</p>}
        {(!error && !loading) && <h3>Set 1 ✔️</h3>}

        {/* For The The Character */} 
        {e && <p>There was an error</p>}
        {l && <p>Loading...</p>}
        {(!e && !l) && <h3>Char ✔️ </h3>}

        <p>Total Characters : {data?.characters?.results.length} 🦊</p>

        <Search/>
        <p>Characters Found : {found} </p>

       {/* Showcase */}
        <div className='char-box'>
          {foundData.map(char=>{
            return(
              <div>
                <img src={char.image}/>
                <h4>{char.name}</h4>
              </div>
            )
          })}
        </div>

    

    </div>
  );
}

export default App;
