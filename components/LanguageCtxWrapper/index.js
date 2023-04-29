import LanguageCtx from '../../contexts/LanguageCtx'
import {useState} from 'react'

function LanguageCtxWrapper({children, language}){

    const [currentLanguage, setLanguage] = useState(language)

    return (
        <LanguageCtx.Provider value={{currentLanguage, setLanguage}}>
            {children}
        </LanguageCtx.Provider>
    )

}

export default LanguageCtxWrapper