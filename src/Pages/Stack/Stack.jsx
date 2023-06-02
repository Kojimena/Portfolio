import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-creative"

// import required modules
import { EffectCreative } from "swiper"
import styles from "./Stack.module.css"

// import required modules

const Stack = () => {
  return (
    <div className={styles.stackcontainer}>
      <Swiper
        grabCursor
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.sliderswipe}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.sliderswipe}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.sliderswipe}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.sliderswipe}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.sliderswipe}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.sliderswipe}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.sliderswipe}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.sliderswipe}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.sliderswipe}>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Stack
