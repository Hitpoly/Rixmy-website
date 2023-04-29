
import React, {useContext, useRef} from 'react'
import LanguageCtx from '../../../contexts/LanguageCtx'
import {useRouter} from 'next/router'

function LanguageSelector() {
    
    const {currentLanguage, setLanguage} = useContext(LanguageCtx)
    const languageSelect = useRef()

    const router = useRouter()

    function cambiando(){

        setLanguage(languageSelect.current.value)

        if (router.locale === 'en'){
            router.replace(router.asPath, null, {scroll: false, locale: 'es'})
        }
        else if (router.locale === 'es'){
            router.replace(router.asPath, null, {scroll: false, locale: 'en'})
        }
            
    }

    return (
        <select name="select" defaultValue={currentLanguage} onChange={cambiando} ref={languageSelect}>
            <option value="es" >ES</option>
            <option value="en" >EN</option>
        </select>
    )
}

export default LanguageSelector