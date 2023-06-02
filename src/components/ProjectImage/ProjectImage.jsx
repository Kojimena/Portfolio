import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./ProjectImage.module.css"

const ProjectImage = ({ name, image, url, desc }) => {
  return (
    <div className={styles.projectimagecontainer}>
      <h2 className={styles.proyectname}>{name}</h2>
      <div className={styles.projectimg}>
        <button type="button" onClick={() => window.open(url)}>
          <img src={image} alt="img" className={styles.image} />
        </button>
      </div>
      <div className={styles.projectdesc}>
        <p>{desc}</p>
      </div>
    </div>
  )
}

ProjectImage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default ProjectImage
