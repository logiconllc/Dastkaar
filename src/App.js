import React from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Products from './Components/why-us';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <div>
        <Banner />
      </div>
      <Products />
    </div>
  );
}

export default App;
