import React, {useState} from 'react'
import styles from './Header.module.scss'
import plusImg from '../../assets/img/icons/header_panel/plus_black.svg'
import doneImg from '../../assets/img/icons/header_panel/done.svg'
import bellImg from '../../assets/img/icons/header_panel/bell.svg'
import settingsImg from '../../assets/img/icons/header_panel/settings.svg'
import menuImg from '../../assets/img/icons/header_panel/menu.svg'




function Header({active, setActive}) {
  

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu_space}>
            <button className={styles.burger_button} onClick={() => setActive(!active)}>
              <img src={menuImg} alt="menu" height='30'/>

            </button>
            
        </div>
        <div className={styles.form_wrapper}>
          <div className={styles.search_field}>
            <input type="text" placeholder='Search'/>
          </div>
        </div>


        <ul className={styles.panel}>
            <li className={styles.panel_item}><img src={plusImg} alt="icon" height='25'/></li>
            <li className={styles.panel_item}><img src={doneImg} alt="icon" height='25'/></li>
            <li className={styles.panel_item}><img src={bellImg} alt="icon" height='25'/></li>
            <li className={styles.panel_item}><img src={settingsImg} alt="icon" height='25'/></li>
        </ul>
      </div>


  
    </div>
    
  )
}

export default Header 