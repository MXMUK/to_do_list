import React from 'react'
import styles from "./Article.module.scss"
function Article() {
  return (
    <div className={styles.article}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.item}>fdsf</div>
          <div className={styles.item}>sdfsdf</div>
        </div>
      </div>
    </div>
  )
}

export default Article