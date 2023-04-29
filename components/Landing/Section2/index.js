import React from 'react'
import styles from './styles.module.css'
import ArrowRight from '../Icons/ArrowRight'

function Section2({ data }) {

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
      className={`${styles.article} ${styles[data.class]}`}
      style={{
        background: `${data.position} url(${imgUrl})`,
        backgroundSize: 'cover'
      }}
    >
      <div className={containerStyles && containerStyles}>

        <div className={styles.content}>

          <div className={styles.content_flex}>

            {/* left text */}
            <div className={styles.content_width}>
              {/* LOGO */}
              <div>
                {data.logoText &&
                  <img src="/img/items/section_logo.svg" alt='section_logo'
                    width={86}
                    height={22}
                  />
                }
                <span>{data.logoText}</span>
              </div>

              {/* TEXTO */}
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

            {/* right text */}
            <div className={styles.content_width1}>

              <h2 className={styles.h2}>{data.rightText.title}</h2>
              <div className={styles.content_flex1}>

                {
                  data.rightText.content.map(({ subtitle, description }, index) => {
                    return (
                      <div key={index}>
                        <h3>
                          {subtitle}
                        </h3>
                        <hr />
                        <p>
                          {description}
                        </p>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

  )
}

export default Section2