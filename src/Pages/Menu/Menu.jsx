import React from "react"
import styles from "./Menu.module.css"
import MenuElement from "../../components/MenuElement/MenuElement"
import { navigate } from "../../store"

const Menu = () => {
  const handleNavigate = () => {
    navigate("/")
  }

  return (
    <div className={styles.menucontainer}>
      <div className={styles.header}>
        <button onClick={handleNavigate} type="button">
          <img src="/images/menuclose.svg" alt="logo" className={styles.menu} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.menu}>
          <MenuElement
            number="01"
            label="HHome"
            backgroundColor="transparent"
            textColor="#4A696C"
            textnumberColor="#606887"
            path="/"
          />
          <MenuElement
            number="02"
            label="Proyectos"
            backgroundColor="transparent"
            textColor="#4A696C"
            textnumberColor="#606887"
            path="/projects"
          />
          <MenuElement
            number="03"
            label="SStack"
            backgroundColor="transparent"
            textColor="#4A696C"
            textnumberColor="#606887"
            path="/stack"
          />
          <MenuElement
            number="04"
            label="Abbout"
            backgroundColor="transparent"
            textColor="#4A696C"
            textnumberColor="#606887"
            path="/about"
          />
          <MenuElement
            number="05"
            label="Conntacto"
            backgroundColor="transparent"
            textColor="#4A696C"
            textnumberColor="#606887"
            path="/contact"
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
