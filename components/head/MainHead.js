import React from 'react'
import styles from '../../styles/MainHead.module.css'

const MainHead = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        
        <div className={styles.bars}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <div className={styles.logo}>
          <img src="./images/mainHeadLogo_1.png" alt="mainLogo" />
          <div className={styles.text}>
            <h3>Esports</h3>
            <p>Middle East</p>
          </div>
        </div>

        <ul className={styles.links}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Influencers</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Blog</a></li>
        </ul>

        <button className={styles.btn}>contact</button>
      </div>
    </div>
  )
}

export default MainHead