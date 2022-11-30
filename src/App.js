
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [ingredients, setIngredients] = useState([])
  const [cockTailName, setCockTailName] = useState('')
  
  const API_KEY = 'LQfG4o46WCky/bl4BnGjrg==h5GhOQ54nyPvc0O1';

  const fetchCocktailRecipe = async () => {
    try {
      const resp = await axios('https://api.api-ninjas.com/v1/cocktail?name=bloody mary', {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
      setCockTailName(resp.data[0].name)
      setIngredients(resp.data[0].ingredients);
    } catch(error) {

    }
  } 
  fetchCocktailRecipe();
  return (
    <div className="App">
    <label>{cockTailName}</label>
    {ingredients.map(p => (
      <ul key={p}>
        <li key={p}>{p}</li>
      </ul>
    ))}
    </div>
  );
  
}

export default App;
