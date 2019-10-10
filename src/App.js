import React from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Products from './Components/why-us';
import Category from './Components/Category';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <Banner />
      <Products />
      <Category />
    </div>
  );
}

export default App;
