import React from "react"
import ReactTypingEffect from "react-typing-effect"
import styles from "./About.module.css"
import { navigate } from "../../store"

const About = () => {
  const handleNavigate = () => {
    navigate("/menu")
  }
  return (
    <div className={styles.aboutcontainer}>
      <img
        src="/images/15.svg"
        alt="bubble1"
        className={styles.bubble}
        loading="lazy"
      />
      <img
        src="/images/15.svg"
        alt="bubble2"
        className={styles.bubble2}
        loading="lazy"
      />
      <div className={styles.header}>
        <button onClick={handleNavigate} type="button">
          <img src="/images/menuwhite.svg" alt="logo" className={styles.menu} />
        </button>
      </div>
      <div className={styles.title}>
        <h1>SOBBRE MÍ</h1>
      </div>
      <div className={styles.about}>
        <ReactTypingEffect
          text={[
            "Hola, mi nombre es Jimena Ortega, pero me gusta que me digan Jime.",
            // eslint-disable-next-line max-len
            "Soy desarrolladora web front-end y diseñadora de UX/UI de Guatemala. Me apasiona el café, la música y la poesía.",
            "Siempre estoy curiosa por aprender más cuando se trata de nuevas tecnologías y codificación creativa.",
            "Me encanta crear cosas que vivan en la web, ya sea aplicaciones, sitios web o cualquier cosa en el medio.",
            "Me encanta trabajar con personas que comparten la misma pasión por la tecnología y el diseño.",
            "Siempre estoy buscando nuevos desafíos y oportunidades para crecer profesionalmente.",
          ]}
          speed={20}
          eraseSpeed={10}
        />
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
        <img src="/images/profilepic.png" alt="jime" />
      </div>
    </div>
  )
}

export default About
