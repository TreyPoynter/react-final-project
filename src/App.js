import './components/style/card.css'
import {useState, useEffect} from 'react';
import treasureItems from './components/TreasureItems/treasureItems.js'
import AddTreasure from './components/AddTreasure/addTreasure.js';
import Treasure from './components/Treasure/treasure.js';
import SearchTreasure from './components/SearchTreasure/searchTreasure.js'
import {keyword} from './components/SearchTreasure/searchTreasure.js'
import './components/style/searchTreasure.css';

function App() {
  // our hook to 'reel' in the data
  const [allTreasureItems, setAllTreasure] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [name, setName] = useState('');
  const [goldAmount, setGoldAmount] = useState(0);
  const [spawnRate, setSpawnRate] = useState(0);
  const [selectedFile, setSelectedFile] = useState();

  const saveTreasureItems = (treasureItems) => {
    setAllTreasure(treasureItems);
    setSearchResults(treasureItems);
    if (localStorage) {
      localStorage.setItem('treasureItems', JSON.stringify(treasureItems));
      console.log('saved treasureItems to local storage');
    }
  }

  const addTreasureItem = (newTreasure) => {
    const updatedTreasureItems = [...allTreasureItems, newTreasure];
    saveTreasureItems(updatedTreasureItems);
  }

  const editTreasureItem = (updatedTreasure) => {
    const updatedTreasureArray = allTreasureItems.map(treasure => treasure.id === updatedTreasure.id ? {...treasure, ...updatedTreasure} : treasure);
    saveTreasureItems(updatedTreasureArray);
  }

  useEffect(() => {
    if (localStorage) {
      const treasureLocalStorage = JSON.parse(localStorage.getItem('treasureItems'));
      if (treasureLocalStorage) {
        saveTreasureItems(treasureLocalStorage);
      }
    } else {
      saveTreasureItems(treasureItems);
    }
  }, []);

  const searchTreasure = () => {
    let keywordsArray = [];

    if (keyword) {
      keywordsArray = keyword.toLowerCase().split(' ');
    }

    if (keywordsArray.length > 0) {
      const searchResult = allTreasureItems.filter(treasure => {
        for (const word of keywordsArray) {
          if (treasure.name.toLowerCase().includes(word)) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResult);
    } else {
      setSearchResults(allTreasureItems);
    }
  }

  const deleteTreasure = (treasureToDelete) => {
    const updatedTreasureArray = allTreasureItems.filter(treasure => treasure.id !== treasureToDelete.id);
    saveTreasureItems(updatedTreasureArray);
  }

  return (
    <div className="container">
      <div className='text-center'>
        <h1 className='display-2'>Loot Fondling</h1>
      </div>
      <AddTreasure addTreasure={addTreasureItem} name={name} setName={setName} goldAmount={goldAmount} setGoldAmount={setGoldAmount}
        spawnRate={spawnRate} setSpawnRate={setSpawnRate} selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
      <SearchTreasure searchTreasure={searchTreasure}/>
      <div className="row">
        {searchResults && searchResults.map((treasure) => // loops through the allTreasureItems with .map
          (
            <div className="col-lg-3 col-md-6" key={treasure.id}>
              <Treasure treasure={treasure} deleteTreasure={deleteTreasure} editTreasureItem={editTreasureItem} name={name} setName={setName} goldAmount={goldAmount} setGoldAmount={setGoldAmount} 
                spawnRate={spawnRate} setSpawnRate={setSpawnRate}/>
            </div>
          )
        )}
      </div>
    </div> 
  );
}

export default App;
