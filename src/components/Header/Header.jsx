import React, {useState} from 'react'
import { Transition  } from 'react-transition-group'


import styles from './Header.module.scss'
import stylesPlusForm from './Form.module.scss'

import Modal from "./Modal/Modal.jsx"






function Header({active, setActive}) {

  const [PanelMenuVisible, setPanelMenuVisible] = useState(false)
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className={styles.box}>
     <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.menu_space}>
            <button className={styles.burger_button} >
              <svg onClick={() => setActive(!active)} fill={active ? '#fff' : 'black'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
            </button>
            
        </div>
        <div className={styles.form_wrapper}>
          <div className={styles.search_field}>
            <input type="text" placeholder='Search'/>
          </div>
          
        </div>

        
        <ul className={styles.panel}>
            <li className={styles.panel_item}>
              
              <svg onClick={() => setModalActive(!active)} xmlns="http://www.w3.org/2000/svg" id="Layer_1"  viewBox="0 0 24 24" width="25" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm4 13h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"/></svg>
              <Modal active={modalActive} setActive={setModalActive}/>
            </li>
            <li className={styles.panel_item}>
              <svg onClick={() => setPanelMenuVisible(!PanelMenuVisible)} xmlns="http://www.w3.org/2000/svg" id="Layer_1"  viewBox="0 0 24 24" width="25" data-name="Layer 1"><path d="m4 6a2.982 2.982 0 0 1 -2.122-.879l-1.544-1.374a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.604-3.431a1 1 0 0 1 1.378 1.448l-3.589 3.414a2.964 2.964 0 0 1 -2.1.862zm20-2a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zm-17.9 9.138 3.589-3.414a1 1 0 1 0 -1.378-1.448l-3.6 3.431a1.023 1.023 0 0 1 -1.414 0l-1.59-1.585a1 1 0 0 0 -1.414 1.414l1.585 1.585a3 3 0 0 0 4.226.017zm17.9-1.138a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zm-17.9 9.138 3.585-3.414a1 1 0 1 0 -1.378-1.448l-3.6 3.431a1 1 0 0 1 -1.456-.04l-1.585-1.414a1 1 0 0 0 -1.332 1.494l1.544 1.374a3 3 0 0 0 4.226.017zm17.9-1.138a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1z"/></svg>
              
            </li>
            <li className={styles.panel_item}><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="25" ><path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z"/></svg></li>
            <li className={styles.panel_item}><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="25" ><path d="M1,4.75H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2ZM7.333,2a1.75,1.75,0,1,1-1.75,1.75A1.752,1.752,0,0,1,7.333,2Z"/><path d="M23,11H20.264a3.727,3.727,0,0,0-7.194,0H1a1,1,0,0,0,0,2H13.07a3.727,3.727,0,0,0,7.194,0H23a1,1,0,0,0,0-2Zm-6.333,2.75A1.75,1.75,0,1,1,18.417,12,1.752,1.752,0,0,1,16.667,13.75Z"/><path d="M23,19.25H10.931a3.728,3.728,0,0,0-7.195,0H1a1,1,0,0,0,0,2H3.736a3.728,3.728,0,0,0,7.195,0H23a1,1,0,0,0,0-2ZM7.333,22a1.75,1.75,0,1,1,1.75-1.75A1.753,1.753,0,0,1,7.333,22Z"/></svg></li>
        </ul>
      </div>  
    </div>
    <Transition
      in={PanelMenuVisible}
      timeout={200}
    >
      {state => (
        <div className={`${stylesPlusForm.box} ${stylesPlusForm[state]}`}>
           <div className={stylesPlusForm.wrapper}>
             <h1 className={stylesPlusForm.title}>here is menu</h1>
             
           </div>
        </div>
      )}
    </Transition>   
     
  </div>
    
  )
}

export default Header 