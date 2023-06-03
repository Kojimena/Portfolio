import React from "react"
import styles from "./Contact.module.css"
import { navigate } from "../../store"
import ArrowElement from "../../components/ArrowElement/ArrowElement"

const Contact = () => {
  const handleNavigate = () => {
    navigate("/menu")
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={handleNavigate} type="button">
          <img src="/images/menu.svg" alt="logo" className={styles.menu} />
        </button>
      </div>
      <div className={styles.title}>
        <h1>Contact</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <h2>Mail</h2>
            <div className={styles.arrowelement}>
              <ArrowElement
                path="mailto:her21199@uvg.edu.gt"
                text="her21199@uvg.edu.gt"
              />
            </div>
          </div>
          <div className={styles.contactItem}>
            <h2>Social Media</h2>
            <div className={styles.arrowelement}>
              <ArrowElement
                path="https://www.instagram.com/kojimena/"
                text="Instagram"
              />
              <ArrowElement
                path="https://www.linkedin.com/in/jimena-ortega-202606204/"
                text="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
