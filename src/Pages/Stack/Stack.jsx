import React, { useState } from "react"
import styles from "./Stack.module.css"
import { navigate } from "../../store"

// import required modules

const Stack = () => {
  const handleNavigate = () => {
    navigate("/menu")
  }

  const frameworksList = [
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "NextJs",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
  ]

  const toolsList = [
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Github",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VSCode",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Figma",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Android Studio",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    },
    {
      name: "Canva",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      name: "Firebase",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Eslint",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    },
  ]

  const languagesList = [
    {
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C++",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
  ]

  // Estado para la lista de íconos actual
  const [currentIcons, setCurrentIcons] = useState([])

  // Funciones para actualizar la lista de íconos
  const showFrameworks = () => setCurrentIcons(frameworksList)
  const showTools = () => setCurrentIcons(toolsList)
  const showLanguages = () => setCurrentIcons(languagesList)

  return (
    <div className={styles.stackcontainer}>
      <div className={styles.header}>
        <button
          onClick={() => window.open("https://github.com/Kojimena")}
          type="button"
        >
          <img src="/images/github.svg" alt="logo" className={styles.github} />
        </button>
        <button onClick={handleNavigate} type="button">
          <img src="/images/menuwhite.svg" alt="logo" className={styles.menu} />
        </button>
      </div>
      <div className={styles.title}>
        <h1>Stack</h1>
      </div>
      <div className={styles.stackleft}>
        <div className={styles.stackleftitems}>
          <button
            type="button"
            className={styles.buttontext}
            onClick={showFrameworks}
          >
            <h2>Frameworks</h2>
          </button>
          <button
            type="button"
            className={styles.buttontext}
            onClick={showTools}
          >
            <h2>Herramientas</h2>
          </button>
          <button
            type="button"
            className={styles.buttontext}
            onClick={showLanguages}
          >
            <h2>Lenguajes</h2>
          </button>
        </div>
      </div>
      <div className={styles.stackelements}>
        {currentIcons.map((icon) => (
          <div key={icon.name} className={styles.element}>
            <img src={icon.image} alt={icon.name} />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stack
