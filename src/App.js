import React from 'react';
import './App.css';
import Header from './components/header/header'
import UserInfo from './components/UserInfo/UserInfo'

/**
 *  This component is used to create a layout with Header and UserInfo
 */

function App() {
  return (
    <div className="App">
      <Header/>
      <UserInfo/>
    </div>
  );
}

export default App;
