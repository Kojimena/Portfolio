import React from "react"
import styles from "./Home.module.css"
import { navigate } from "../../store"
import ArrowElement from "../../components/ArrowElement/ArrowElement"

const Home = () => {
  const handleNavigate = () => {
    navigate("/menu")
  }

  return (
    <div className={styles.homecontainer}>

      <img
        src="/images/bubblecorner.svg"
        alt="bubble3"
        className={styles.bubble3}
        loading="lazy"
      />
      <img
        src="/images/bubblecorner.svg"
        alt="bubble3"
        className={styles.bubble4}
        loading="lazy"
      />
      <div className={styles.header}>
        <button onClick={handleNavigate} type="button">
          <img src="/images/menuwhite.svg" alt="logo" className={styles.menu} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.name}>
          <h1>Jimena Ortega</h1>
        </div>
        <div className={styles.description}>
          <p>Front-end web developer y diseñadora UX/UI </p>
        </div>
        <div className={styles.arrow}>
          <ArrowElement text="Proyectos" path="/projects" />
          <ArrowElement text="Sobre mí" path="/about" />
        </div>
      </div>
    </div>
  )
}

export default Home
