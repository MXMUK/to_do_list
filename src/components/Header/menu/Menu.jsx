import React from 'react'
import './menu.styles.scss'
export const Menu = ({active, setActive}) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
        <div className="menu_content" onClick={e => e.stopPropagation()}>
                <div className="menu_header">Burger menu</div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
         </div>
    </div>
  )
}
export default Menu