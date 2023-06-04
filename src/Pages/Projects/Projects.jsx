import React, { useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// eslint-disable-next-line import/no-unresolved
import "swiper/css"
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination"
import { Pagination } from "swiper"
import styles from "./Projects.module.css"
import { navigate } from "../../store"
import ProjectImage from "../../components/ProjectImage/ProjectImage"

const Projects = () => {
  const [projectName, setProjectName] = useState(null)

  const handleNavigate = () => {
    navigate("/menu")
  }

  const handleMouseEnter = (name) => {
    setProjectName(name)
  }

  const handleMouseLeave = () => {
    setProjectName(null)
  }

  const arrayProjects = [
    {
      name: "Coffee machine",
      image: "/images/coffee.png",
      url: "https://github.com/Kojimena/WEB-L4",
      desc: "Maquina de café usando únicamente HTML y CSS",
    },
    {
      name: "Memory Game",
      image: "/images/memorygame.png",
      url: "https://uvgenios.online/21199/WEB-L6/index.html",
      desc: "Juego de memoria usando React",
    },
    {
      name: "Maze Game",
      image: "/images/maze.png",
      url: "https://brilliant-crumble-59128a.netlify.app/",
      desc: "Juego de laberinto usando React",
    },
    {
      name: "Github in React",
      image: "/images/github.png",
      url: "https://incredible-lollipop-630aec.netlify.app",
      desc: "Página principal de Github usando componentes de React",
    },
    {
      name: "Calculator",
      image: "/images/calculator.png",
      url: "https://fabulous-crostata-9abe88.netlify.app",
      desc: "Calculadora con implementación de vitest",
    },
    {
      name: "Uniempleos",
      image: "/images/uniempleos.png",
      url: "https://sage-palmier-936be2.netlify.app/",
      desc: "Página de empleos usando React",
    },
  ]
  return (
    <div className={styles.projectscontainer}>
      <div className={styles.header}>
        <button onClick={handleNavigate} type="button">
          <img src="/images/menuwhite.svg" alt="logo" className={styles.menu} />
        </button>
      </div>
      <div className={styles.title}>
        <h1>Proyectos</h1>
      </div>
      <div className={styles.contentslider}>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            onMouseEnter={() => handleMouseEnter("Margherita")}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/images/margherita.png"
              alt="img"
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => handleMouseEnter("YVM")}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/images/yvm.png" alt="img" className={styles.image} />
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => handleMouseEnter("NacionSushi")}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/images/nc.png" alt="img" className={styles.image} />
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => handleMouseEnter("Paez")}
            onMouseLeave={handleMouseLeave}
          >
            <img src="/images/paez.png" alt="img" className={styles.image} />
          </SwiperSlide>
          {projectName && (
            <div className={styles.projectName}>{projectName}</div>
          )}
        </Swiper>
      </div>
      <div className={styles.titleproyects}>
        <h1>Universidad</h1>
      </div>
      <div className={styles.contentproyects}>
        {arrayProjects.map((project) => (
          <ProjectImage
            name={project.name}
            image={project.image}
            url={project.url}
            desc={project.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
