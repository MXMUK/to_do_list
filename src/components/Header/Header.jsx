import React, {useState} from 'react'
import styles from './Header.module.scss'
import plusImg from '../../assets/img/icons/header_panel/plus_black.svg'
import doneImg from '../../assets/img/icons/header_panel/done.svg'
import bellImg from '../../assets/img/icons/header_panel/bell.svg'
import settingsImg from '../../assets/img/icons/header_panel/settings.svg'
import menuImg from '../../assets/img/icons/header_panel/menu.svg'

import Menu from './menu/Menu.jsx'



function Header() {

  let [menuActive, setMenuActive] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu_space}>
            <button className={styles.burger_button} onClick={() => setMenuActive(!menuActive)}>
              <img src={menuImg} alt="menu" height='28'/>

            </button>
            <Menu active={menuActive} setActive={setMenuActive}/>
        </div>
        <div className={styles.form}>
          <form className={styles.search_form}>
            <input type="text" placeholder='Quick find' className={styles.search_input} onChange={(event) => console.log(event.target.value)}/>
          </form>
        </div>


        <ul className={styles.panel}>
            <li className={styles.panel_item}><img src={plusImg} alt="icon" height='24'/></li>
            <li className={styles.panel_item}><img src={doneImg} alt="icon" height='24'/></li>
            <li className={styles.panel_item}><img src={bellImg} alt="icon" height='24'/></li>
            <li className={styles.panel_item}><img src={settingsImg} alt="icon" height='24'/></li>
        </ul>
      </div>
    </div>
  )
}

export default Header