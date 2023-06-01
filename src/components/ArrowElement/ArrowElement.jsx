import React from "react"
import PropTypes from "prop-types"
import styles from "./ArrowElement.module.css"
import { navigate } from "../../store"

const ArrowElement = ({ path, text }) => {
  const onHandleClick = () => {
    navigate(path)
  }
  return (
    <div className={styles.buttonContainer}>
      <button type="button" onClick={onHandleClick}>
        <img
          src="/images/arrowright.svg"
          alt="arrow"
          className={styles.arrow}
        />
        <span className={styles.text}>{text}</span>
      </button>
    </div>
  )
}

ArrowElement.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default ArrowElement
