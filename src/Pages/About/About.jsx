import React from "react"
import styles from "./About.module.css"
import { navigate } from "../../store"

const About = () => {
  const handleNavigate = () => {
    navigate("/menu")
  }
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.header}>
        <button onClick={handleNavigate} type="button">
          <img src="/images/menuwhite.svg" alt="logo" className={styles.menu} />
        </button>
      </div>
      <div className={styles.title}>
        <h1>SOBBRE MÍ</h1>
      </div>
      <div className={styles.about}>
        <p>
          {" "}
          Hola, mi nombre es Jimena Ortega, pero me gusta que me digan Jime. Soy
          desarrolladora web front-end y diseñadora de UX/UI de
          Guatemala.También me apasiona el café, la música y la poesía y siempre
          estoy curiosa por aprender más cuando se trata de nuevas tecnologías y
          codificación creativa.
        </p>
      </div>
      <div className={styles.arrow}>
        <button
          type="button"
          onClick={() =>
            window.open(
              // eslint-disable-next-line max-len
              "https://www.canva.com/design/DAFT0kjAXL4/8aklmYj_CQUiqItXZlWtHg/view?utm_content=DAFT0kjAXL4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            )
          }
        >
          <img src="/images/arrowlink.svg" alt="arrow" />
          <h2>CV</h2>
        </button>
      </div>
      <div className={styles.image}>
        <img src="/images/profilepic.svg" alt="jime" />
      </div>
    </div>
  )
}

export default About
