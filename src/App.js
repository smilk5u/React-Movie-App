import React, { useEffect, useState } from 'react';
import Button from './Button';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://koreanjson.com/posts/')
      // fetch('https://jsonplaceholder.typicode.com/posts/')
      // fetch('https://api.coinpaprika.com/v1/tickers')
      .then(respones => respones.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      })
  }, [])

  return (
    <div>
      <h1>The Coins! {loading ? '' : coins.length} </h1>

      {loading ? <strong>Loading...</strong> : (
        <select>
          {
            coins.map(e => {
              return <option><p>{e.id}  {e.title}</p></option>
            }) 
          }   
        </select>
      )}
      <Button></Button>
    </div>
  );
};

export default App;