import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import UserInfo from './components/UserInfo/UserInfo'

function App() {
  return (
    <div className="App">
      <Header/>
      <UserInfo/>
    </div>
  );
}

export default App;
