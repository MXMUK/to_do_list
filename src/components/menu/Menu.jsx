import React from 'react'
import s from './Menu.module.scss'


const Menu = ({active}) => {
  return (
    <div className={active ? `${s.menu} ${s.active}` : s.menu} >
        <div className={s.menu_content}>
              <div className={s.calendar}>
                Here is calendar
              </div>
              <div className={s.weather_module}>
               Here is weather
              </div>
         </div>
    </div>
  )
}
export default Menu;
