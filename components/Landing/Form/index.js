import React from 'react'
import styles from './styles.module.css'

function Form({data}) {

    data = data.attributes
    const imgUrl = `http://adm.rixmy.com${data.imgUrl}`

    return (
        <section
            className={`${styles.article}`}
            style={{
                background: `center url(${imgUrl})`,
                backgroundSize: "cover"
            }}
        >
            <div >

                <div className={styles.content}>
                    <div>
                        <img
                            src="/img/items/section_logo.svg"
                            alt="section_logo"
                            width={86}
                            height={22}
                        />
                        <span>{data.logoText}</span>  {/*Contactanos */}
                    </div>
                    <div>
                        <h1>{data.title}</h1> {/*¿Cómo contactarnos? */}
                    </div>
                </div>

                <form className={`${styles.form}`}>

                    {
                        data.labels.map(label => {
                            return (
                                <label key={label.name}>
                                    <input
                                        type= {label.type}
                                        name= {label.name}
                                        id= {label.name}
                                        placeholder= {label.placeholder}
                                    />
                                </label>
                            )
                        })
                    }

                    <button type={data.button.type}>
                        {data.button.text.toUpperCase()}
                    </button>
                </form>
            </div>

        </section>

    )
}

export default Form