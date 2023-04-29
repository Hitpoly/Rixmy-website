import React from 'react'
import Slideshow from '../Slideshow'
import Slide from '../Slide';

export default function NewSlider({ contents, controls, autoplay, speed, interval }) {

    return (
        <>
            <Slideshow
                controls={controls}
                autoplay={autoplay}
                speed={speed}
                interval={interval}
            >
                {
                    contents.map((content, index) => {
                        return (
                            <Slide content={content} key={index} />
                        )
                    })
                }

            </Slideshow>
        </>
    )
}