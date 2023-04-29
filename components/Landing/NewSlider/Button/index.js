import styles from './styles.module.css'


import { useRef, useEffect } from 'react';

export default function Button (props){

	const buttonRef = useRef(null);

	useEffect(() => {
		if (buttonRef.current) {

			if (props.right) {
				buttonRef.current.style.right = '0'
			} else {
				buttonRef.current.style.left = '0'
			}
		} 
	}, [buttonRef, props.right]);
	
	return (
		<button className={styles.boton} onClick={props.click} ref={buttonRef}>
			{props.children}
		</button>
	)
}