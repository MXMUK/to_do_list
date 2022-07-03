import Header from "./components/Header/Header";


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
<<<<<<< HEAD

=======
      {/* <Main/> */}
      <Article active={menuActive} setActive={setMenuActive}/>
>>>>>>> 5db086b329dcbe8e892e84b55be1cddcaedf1e1c
    </div>
  );
}

export default App;
