import React from 'react'
import styles from './styles.module.css';
import Section from '../../Section'

export default function Slide({content}) {

    return (
        <div className={styles.slide}>
            <Section data={content}/>
        </div>
    )
}