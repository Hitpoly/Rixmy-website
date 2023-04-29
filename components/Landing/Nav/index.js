import Link from 'next/link'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LanguageSelector from '../LanguageSelector';
import { useContext } from 'react'
import LanguageCtx from '../../../contexts/LanguageCtx'

const txt = {
  INICIO: {
    'es': 'INICIO',
    'en': 'HOME'
  },
  NOSOTROS: {
    'es': 'NOSOTROS',
    'en': 'ABOUT US'
  },
  SERVICIOS: {
    'es': 'SERVICIOS',
    'en': 'SERVICES'
  },
  NUESTRO_TRABAJO: {
    'es': 'NUESTRO TRABAJO',
    'en': 'OUR WORK'
  },
  NOTICIAS: {
    'es': 'BLOG',
    'en': 'BLOG'
  },
  TRABAJA_CON_NOSOTROS: {
    'es': 'TRABAJA CON NOSOTROS',
    'en': 'WORK WITH US'
  },
  CONTACT: {
    'es': 'CONTÁCTANOS',
    'en': 'CONTACT US'
  }
}

function NavDisplay({ state }) {

  const { currentLanguage, setLanguage } = useContext(LanguageCtx)

  return (

    <div id={styles.menuNav} className={state}>
      <ul>
        <li className={styles.dropdown}>
          <Link href='/'>
            <a>{txt.INICIO[currentLanguage]}</a>
          </Link>
          {/* <hr /> */}
          {/* <span className={styles.dropdown_content}>
            <a href="">NUESTRO ENFOQUE</a>
            <a href="">NUESTRO EQUIPO</a>
          </span> */}
        </li>
        <li className={styles.dropdown}>
          <Link href={'/about'}>
            <a>{txt.NOSOTROS[currentLanguage]}</a>
          </Link>
        </li>
        <li>
          <Link href={'/services'}>
            <a href="">{txt.SERVICIOS[currentLanguage]}</a>
          </Link>
        </li>
        <li href="/">
          <a href="">{txt.NUESTRO_TRABAJO[currentLanguage]}</a>
        </li>
        <li>
          <Link href="/blog">
            <a href="">{txt.NOTICIAS[currentLanguage]}</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a href="">{txt.TRABAJA_CON_NOSOTROS[currentLanguage]}</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

function Nav() {

  const [active, setActive] = useState('');
  const { currentLanguage, setLanguage } = useContext(LanguageCtx)

  const router = useRouter()

  function menuNav() {
    setActive(active === '' ? `${styles.active}` : '')
  }

  return (
    <>
      <nav className={styles.navigation}>
        <Link href="/">
          <a>
            <img
              className={styles.logo}
              src="/img/rixmy_logo.svg"
              alt='rixmy'
              width={100}
              height={100}
            />
          </a>
        </Link>
        <ul>
          <li className={styles.menu}>
            <a id={styles.menu} onClick={menuNav} className={styles.lenguage}>
              <img
                src="/img/items/menu.svg"
                alt='menu'
                width={30}
                height={30}
              />
            </a>
          </li>
          <li className={styles.lenguage}>
            <LanguageSelector />
          </li>
          <li className={styles.contact}>
            <Link href='/contact'>
              <a>{txt.CONTACT[currentLanguage]}</a>
            </Link>
          </li>
        </ul>
      </nav>
      <NavDisplay state={active} />
    </>
  )
}

export default Nav