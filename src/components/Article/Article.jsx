import React from 'react'

import s from './Article.module.scss'



function Article({active}) {
  return (
    <div className={s.article}>
        <div className={active ? `${s.smaller} ${s.wrapper}` : s.wrapper}>
            <div className={s.main}>
                <div className={s.item}> </div>
                <div className="item"></div>
                
            </div>
        </div>
    </div>
  )
}

export default Article