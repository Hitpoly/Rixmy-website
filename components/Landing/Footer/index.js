import styles from './styles.module.css'
import FacebookIcon from '../Icons/FacebookIcon'
import TiktokIcon from '../Icons/TiktokIcon'
import LinkedinIcon from '../Icons/LinkedinIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import WhatsappIcon from '../Icons/WhatsappIcon'
import MailIcon from '../Icons/MailIcon'
import YoutubeIcon from '../Icons/YoutubeIcon'


function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <img src="/img/items/rixmy_full_logo.svg" alt='Logo-Footer' width={212} height={75} />
                <p className={styles.p}>Perú, lima - Los Olivos 15306 / agencia@rixmy.com / +54 9 2664 33-6885</p>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/RixmyMarketing" target={'_blank'} rel="noreferrer">
                            <FacebookIcon width={25} height={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCeEnvQ1z9z7udWXVwnyUUZQ">
                            <YoutubeIcon width={25} height={25} />
                        </a>
                    </li>
                    {
                        /*
                        <li>
                            <a href="#">
                                <WhatsappIcon width={25} height={25} />
                            </a>
                        </li>
                        */
                    }
                    <li>
                        <a href="https://www.linkedin.com/company/87074323">
                            <LinkedinIcon width={25} height={25} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/rixmyagencia/" target={'_blank'} rel="noreferrer">
                            <InstagramIcon width={25} height={25} />
                        </a>
                    </li>
                    {/* <li>
                        <a href="#">
                            <MailIcon width={25} height={25} />
                        </a>
                    </li> */}
                </ul>
                <ul>
                    <li>
                        <a href="#">COOKIES POLICY</a>
                    </li>
                    <hr className={styles.hr} />
                    <li>
                        <a href="#">TERMS AND CONDITIONS</a>
                    </li>
                    <hr className={styles.hr} />
                    <li>
                        <a href="#">PRIVACY POLICY</a>
                    </li>
                    <hr className={styles.hr} />
                    <li>
                        <a href="#">INTEREST ADVERTISING NOTICE</a>
                    </li>
                </ul>
                <p className={styles.p}>© 2022 Rixmy. All rights reserved</p>
            </div>
        </footer>

    )
}

export default Footer