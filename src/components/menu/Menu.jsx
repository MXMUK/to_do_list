import React from 'react'
import './Menu.styles.scss'


const Menu = ({active}) => {
  return (
    <div className={active ? 'menu active' : 'menu'} >
        <div className="menu_content">
              <div className="calendar">
                Here is calendar
              </div>
              <div className="weather_module">
              Here is weather
              </div>
         </div>
    </div>
  )
}
export default Menu;
