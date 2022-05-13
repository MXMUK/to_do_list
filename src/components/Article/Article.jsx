import React from 'react'

import './Article_module.scss'
import Main from "../Main/Main";


function Article({active}) {
  return (
    <div className='article'>
        <div className={active ? 'wrapper smaller' : 'wrapper'}>
            <div className="main">
                <div className="item"> </div>
                <div className="item"></div>
                
            </div>
        </div>
    </div>
  )
}

export default Article