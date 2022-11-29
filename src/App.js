import './App.css';
import axios from 'axios'

function App() {

  const API_KEY = 'LQfG4o46WCky/bl4BnGjrg==h5GhOQ54nyPvc0O1';

  const fetchCocktailRecipe = async () => {
    try {
      const resp = await axios('https://api.api-ninjas.com/v1/cocktail?name=bloody mary', {
        headers: {
          'X-Api-Key': API_KEY,
        },
      });
      console.log(resp)
    } catch(error) {

    }
  }
  fetchCocktailRecipe();
  return (
    <div className="App">
    hello
    </div>
  );
  
}

export default App;
