import React, {useState} from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SearchBar from './frontend/components/SearchBar/SearchBar';
import NavBar from './frontend/components/NavBar/NavBar';
import Account from './frontend/components/Account/Account';
import Comments from './frontend/components/Comments/Comments';
import Feed from './frontend/components/Feed/Feed';
import Home from './frontend/components/Home/Home';


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
        <nav className='App-nav'>
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/feed' element={<Feed/>}></Route>
            <Route path='/account' element={<Account/>}></Route>
          </Routes>
        </nav>
        <NavBar/>
      </div>
    </Router>
  );
}

export default App;
