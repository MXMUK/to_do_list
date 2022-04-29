import React from 'react'
import styles from './Header.module.scss'
import plusImg from '../../assets/img/icons/header_panel/plus_black.svg'
import doneImg from '../../assets/img/icons/header_panel/done.svg'
import bellImg from '../../assets/img/icons/header_panel/bell.svg'
import settingsImg from '../../assets/img/icons/header_panel/settings.svg'
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <button className={styles.burger_button}>
            button
          </button>
        </div>

        <ul className={styles.panel}>
            <li className={styles.panel_item}><img src={plusImg} alt="img" height='25' /></li>
            <li className={styles.panel_item}><img src={doneImg} alt="img" height='25'/></li>
            <li className={styles.panel_item}><img src={bellImg} alt="img" height='25'/></li>
            <li className={styles.panel_item}><img src={settingsImg} alt="img" height='25'/></li>
        </ul>
      </div>
    </div>
  )
}

export default Header