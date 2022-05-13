import React from 'react'

import './Article_module.scss'
import Main from "../Main/Main";


function Article({active}) {
  return (
    <div className='article'>
        <div className={active ? 'wrapper smaller' : 'wrapper'}>
            <div className="main">
                
            </div>
        </div>
    </div>
  )
}

export default Article