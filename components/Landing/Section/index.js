import React from 'react'
import styles from './styles.module.css'
import ArrowRight from '../Icons/ArrowRight'
import { getStrapiMedia } from "../../../lib/media"

function Section({ data }) {

  const imgUrl = `http://adm.rixmy.com${data.imgUrl}`
  
  let containerStyles = null

  try {
    containerStyles = data.containerClass.split(" ")
    containerStyles = containerStyles.map((style)=> {
      return `${styles[style]}`
    })
    containerStyles = containerStyles.join(' ')
  } catch {
  }
  
  return (
    <section
      className={`${styles.article} ${styles[data.class]} `}>

      <div 
        className={containerStyles && containerStyles}

        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: `${data.position}`,
        }}
      >
        <div className={`${styles.content} ${styles[data.contentPadding]}`}>

          <div>
            {data.logoText &&
              <img src="/img/items/section_logo.svg" alt='section_logo'
                width={86}
                height={22}
              />
            }
            <span>{data.logoText}</span>
          </div>

          <div>
            <h1>{data.title}</h1>
            <p>
              {data.description}
            </p>
            {
              data.anchorText &&
              <a href={data.href}>
                <ArrowRight />
                {data.anchorText}
              </a>
            }
          </div>

        </div>
      </div>
    </section>

  )
}

export default Section