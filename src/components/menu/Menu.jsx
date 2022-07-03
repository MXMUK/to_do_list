import React from 'react'
import s from './Menu.module.scss'
import Weather from '../Weather/Main'

const Menu = ({active}) => {
  return (
    <div className={active ? `${s.menu} ${s.active}` : s.menu} >
        <div className={s.menu_content}>
            
         </div>
    </div>
  )
}
export default Menu;
