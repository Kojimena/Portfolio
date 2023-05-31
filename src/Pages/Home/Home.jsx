import React from "react"
import styles from "./Home.module.css"
import { navigate } from "../../store"

const Home = () => {
  const handleNavigate = () => {
    navigate("/menu")
  }

  return (
    <div className={styles.homecontainer}>
      <img
        src="/images/bubblechubby.svg"
        alt="bubble1"
        className={styles.bubble}
      />
      <img
        src="/images/bubblechubby.svg"
        alt="bubble2"
        className={styles.bubble2}
      />
      <img
        src="/images/bubblecorner.svg"
        alt="bubble3"
        className={styles.bubble3}
      />
      <img
        src="/images/bubblecorner.svg"
        alt="bubble3"
        className={styles.bubble4}
      />
      <div className={styles.header}>
        <button onClick={handleNavigate} type="button">
          <img src="/images/menu.svg" alt="logo" className={styles.menu} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.name}>
          <h1>Jimena Ortega</h1>
        </div>
        <div className={styles.description}>
          <p>Front-end web developer y diseñadora UX/UI </p>
        </div>
      </div>
    </div>
  )
}

export default Home
