import styles from './styles.module.css'

function Video() {
    return (
        <header id={styles.presentation} className={styles.video_presentation}>
            <video className={styles.none}
                autoPlay="autoPlay"
                loop="loop"
                muted
                defaultmuted=""
                playsInline=""
                preload="auto"
                id="miVideo"
            >
                <source src="https://storage.googleapis.com/ehupi-cdn/rixmy.com/v1-rixmy-1035x1080-31-20.mp4" type="video/mp4" />
            </video>
            <video className={styles.none1}
                autoPlay="autoPlay"
                loop="loop"
                muted
                defaultmuted=""
                playsInline=""
                preload="auto"
                id="miVideo"
            >
                <source src="https://storage.googleapis.com/ehupi-cdn/rixmy.com/v1-rixmy-1900x776-31-20-3.mp4" type="video/mp4" />
            </video>
            {/* <div id={styles.container}>
                <div id={styles.flip}>
                    <div><div>Por estas razones, somos tu solución de forma integral</div></div>
                    <div><div>Estamos actualizados y conocemos el mercado</div></div>
                    <div><div>¿Conoces nuestro secreto?</div></div>
                    <div><div>Con nosotros no existe Plan B.</div></div>
                    <div><div>Somos tus aliados para cumplir tus sueños</div></div>
                    <div><div>Estamos comprometimos a crecer contigo</div></div>
                    <div><div>Nuestra propia metodología nos diferencia</div></div>
                    <div><div>Aumentamos la rentabilidad de tu empresa</div></div>
                    <div><div>Confía en nosotros, te ayudamos a potenciar tu marca.</div></div>
                </div>
            </div> */}
        </header>

    )
}

export default Video