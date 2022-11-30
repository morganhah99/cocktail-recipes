
import axios from 'axios'
import { useState, useEffect } from 'react'
import Results from './Results'

function App() {

  const [ingredients, setIngredients] = useState([])
  const [cockTailName, setCockTailName] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  })
  
  const API_KEY = 'LQfG4o46WCky/bl4BnGjrg==h5GhOQ54nyPvc0O1';

  const fetchCocktailRecipe = async () => {
    try {
      const resp = await axios(`https://api.api-ninjas.com/v1/cocktail?name=${cockTailName}`, {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
      setLoading(true);
      setIngredients(resp.data[0].ingredients);
    } catch(error) {

    }
  } 
  return (
    <div className="App">
    <input type="text" placeholder="Enter cocktail or ingredient" onChange={e => setCockTailName(e.target.value)} />
    <button onClick={fetchCocktailRecipe}>submit</button>
    {
      loading ?
      
      <div>loading</div>

      :
      <Results ingredients={ingredients} cockTailName={cockTailName}/>
    }
    </div>
  );
  
}

export default App;
