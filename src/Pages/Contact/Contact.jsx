import React from "react"
import styles from "./Contact.module.css"
import { navigate } from "../../store"
import ArrowElement from "../../components/ArrowElement/ArrowElement"

const Contact = () => {
  const handleNavigate = () => {
    navigate("/menu")
  }

  const whatsappUrl = "https://wa.me/41303712"

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
                text="Send email"
                color="#000"
              />
            </div>
          </div>
          <div className={styles.contactItem}>
            <h2>Social Media</h2>
            <div className={styles.arrowelement}>
              <ArrowElement
                path="https://www.instagram.com/kojimena/"
                text="Instagram"
                color="#000"
              />
              <ArrowElement
                path="https://www.linkedin.com/in/jimena-ortega-202606204/"
                text="LinkedIn"
                color="#000"
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href={whatsappUrl}
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/whatsapp.svg" alt="WhatsApp" />
      </a>
    </div>
  )
}

export default Contact
