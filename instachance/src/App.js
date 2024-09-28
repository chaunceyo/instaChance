import React, {useState} from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SearchBar from './frontend/components/SearchBar/SearchBar';
import NavBar from './frontend/components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='insta-header'>
          <h1>instaChance
          <img src='https://img.freepik.com/premium-photo/3d-illustration-closeup-pair-white-dices-black-background-white-dice-flight-casino-gambling_116124-5781.jpg'
                alt='dice'
                height='50'
                width='100'>
          </img>
          </h1>
        </div>
        <SearchBar/>
        <NavBar/>
        <nav className='App-nav'>
          <Routes>
            <Route path='/home'></Route>
            <Route path='/feed'></Route>
            <Route path='/account'></Route>
          </Routes>
        </nav>
      </div>
    </Router>
  );
}

export default App;
