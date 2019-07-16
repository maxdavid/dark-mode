import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Charts from './components/Charts';
import Navbar from './components/Navbar';
import { useDarkMode } from './hooks';

import './styles.css';

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
      )
      .then(res => {
        setCoinData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const element = window.document.body;
    if (darkMode) element.classList.add('dark-mode');
    else element.classList.remove('dark-mode');
  }, [darkMode]);

  return (
    <div className='App'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Route exact path='/' render={() => <Charts coinData={coinData} />} />
      <Route
        exact
        path='/bitcoin'
        render={() => (
          <Charts
            coinData={coinData.filter(coin => {
              return coin.id === 'bitcoin';
            })}
          />
        )}
      />
      <Route
        exact
        path='/ethereum'
        render={() => (
          <Charts
            coinData={coinData.filter(coin => {
              return coin.id === 'ethereum';
            })}
          />
        )}
      />
      <Route
        exact
        path='/altcoins'
        render={() => (
          <Charts
            coinData={coinData.filter(coin => {
              return coin.id !== 'ethereum' && coin.id !== 'bitcoin';
            })}
          />
        )}
      />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
