import React from 'react'
import styles from './styles.module.css'
import NewSlider from '../NewSlider/NewSlider'

function Slider({ data }) {

  return (

    <section
      className={`${styles.article} ${styles.slider}`}
    >
      <NewSlider
        contents={data}
        controls={true}
        autoplay={true}
        speed="1000"
        interval="4000"
      />

    </section>

  )
}

export default Slider