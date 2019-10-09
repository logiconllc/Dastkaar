import React from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <div>
        <Banner />
      </div>
    </div>
  );
}

export default App;
