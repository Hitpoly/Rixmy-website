import React, { useRef, useEffect, useCallback } from 'react';
import LeftArrow from '../LeftArrow'
import RightArrow from '../RightArrow'
import Button from '../Button'
import styles from './styles.module.css';

export default function Slideshow ({
	children,
	controls = false,
	autoplay = false,
	speed = "500",
	interval = "5000"
}){

	const slideshow = useRef(null);
	const intervalSlideshow = useRef(null);

	const resetInterval = useCallback(() => {

		clearInterval(intervalSlideshow.current)

		intervalSlideshow.current = setInterval(() => {
			nextSlide()
		}, interval)
	})

	const nextSlide = useCallback(() => {

		if (!slideshow.current) return
		if (slideshow.current.children.length === 0) return

		const firstElement = slideshow.current.children[0];
		slideshow.current.style.transition = `${speed}ms ease-out all`;
		const slideSize = slideshow.current.children[0].offsetWidth;
		slideshow.current.style.transform = `translateX(-${slideSize}px)`;

		const transitionEffect = () => {

			slideshow.current.style.transition = 'none';
			slideshow.current.style.transform = `translateX(0)`;

			slideshow.current.appendChild(firstElement);
			slideshow.current.removeEventListener('transitionend', transitionEffect);
		}

		slideshow.current.addEventListener('transitionend', transitionEffect);

		resetInterval()

	}, [speed, resetInterval]);

	const previousSlide = () => {

		if (slideshow.current.children.length === 0) return
		
		const index = slideshow.current.children.length - 1;
		const lastElement = slideshow.current.children[index];
		slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

		slideshow.current.style.transition = 'none';
		const SlideSize = slideshow.current.children[0].offsetWidth;
		slideshow.current.style.transform = `translateX(-${SlideSize}px)`;

		setTimeout(() => {
			slideshow.current.style.transition = `${speed}ms ease-out all`;
			slideshow.current.style.transform = `translateX(0)`;
		}, 30);

		resetInterval()
	
	}

	useEffect(() => {
		if (autoplay) {
			intervalSlideshow.current = setInterval(() => {
				nextSlide();
			}, interval);
		}
	}, [autoplay, interval, nextSlide]);

	return (
		<div className={styles.contenedor_principal}>

			<div className={styles.contenedor_slider_show} ref={slideshow}>
				{children}
			</div>

			{controls &&
				<div className={styles.controls}>

					<Button click={previousSlide}>
						<LeftArrow fill='white'/>

					</Button>

					<Button right click={nextSlide}>
						<RightArrow fill='white'/>
					</Button>

				</div>}
		</div>
	);
}