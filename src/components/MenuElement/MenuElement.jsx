import React from "react"
import PropTypes from "prop-types"
import styles from "./MenuElement.module.css"
import { navigate } from "../../store"

const MenuElement = ({
  number,
  label,
  backgroundColor,
  textColor,
  textnumberColor,
  path,
}) => {
  const onHandleClick = () => {
    navigate(path)
  }
  return (
    <div className={styles.buttonContainer}>
      <button type="button" style={{ backgroundColor }} onClick={onHandleClick}>
        <span
          style={{
            color: textnumberColor,
          }}
          className={styles.number}
        >
          {number}
        </span>{" "}
        <span style={{ color: textColor }} className={styles.label}>
          {label}
        </span>
      </button>
    </div>
  )
}

MenuElement.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textnumberColor: PropTypes.string,
  textColor: PropTypes.string,
  path: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

MenuElement.defaultProps = {
  backgroundColor: "#fff",
  textColor: "#000",
  textnumberColor: "pink",
}

export default MenuElement
