import React from "react"
import styles from "./Menu.module.css"
import MenuElement from "../../components/MenuElement/MenuElement"
import { navigate } from "../../store"

const Menu = () => {
  const handleNavigate = ({ path }) => {
    navigate(path)
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
            label="Home"
            backgroundColor="transparent"
            textColor="#4A696C"
            textnumberColor="#606887"
            onClick={handleNavigate("/")}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
