import React from "react"
import PropTypes from "prop-types"
import styles from "./ArrowElement.module.css"
import { navigate } from "../../store"

const ArrowElement = ({ path, text, color }) => {
  const onHandleClick = () => {
    if (path === "/about") {
      navigate(path)
    } else if (path === "/projects") {
      navigate(path)
    } else {
      window.open(path, "_blank")
    }
  }
  return (
    <div className={styles.buttonContainer}>
      <button type="button" onClick={onHandleClick}>
        <img
          src="/images/arrowright.svg"
          alt="arrow"
          className={styles.arrow}
        />
        <span className={styles.text} style={{ color }}>
          {" "}
          {text}{" "}
        </span>
      </button>
    </div>
  )
}

ArrowElement.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default ArrowElement
