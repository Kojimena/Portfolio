import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper"
import styles from "./Projects.module.css"
import { navigate } from "../../store"

const Projects = () => {
  const handleNavigate = () => {
    navigate("/menu")
  }
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
          <SwiperSlide>
            <img
              src="/images/margherita.png"
              alt="img"
              className={styles.image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/yvm.png" alt="img" className={styles.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/nc.png" alt="img" className={styles.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/paez.png" alt="img" className={styles.image} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
