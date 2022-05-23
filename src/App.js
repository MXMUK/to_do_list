import Header from "./components/Header/Header";
import Article from "./components/Article/Article";

import "./general.scss"

import Menu from './components/menu/Menu.jsx'
import React, { useState } from 'react'
import Main from "./components/Main/Main";


function App() {
  
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="wrapper">
      <Header active = {menuActive} setActive={setMenuActive}/>
      
      <Menu active={menuActive} setActive={setMenuActive}/>
      {/* <Main/> */}
      <Article active={menuActive} setActive={setMenuActive}/>
    </div>
  );
}

export default App;
