import { useState } from 'react';
import ContextChosenLanguage from '../Context';
import { chosenLanguage } from '../utils/language';
import { useContext, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';


const useTranslation = () => {
    const ctx = useContext(ContextChosenLanguage)
    const[text, setText] = useState("")
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })
    

    useEffect (() => {
        if (ctx.language === 'English') {
            setText(chosenLanguage('English'))     
        } else {
            setText(chosenLanguage('Spanish'))
        }   
    },[ctx])

    const t = (key) => {
       return isMobile ?  text[`${key}Mobile`] : text[key]
    }
  

  return {
        isMobile,
        text, 
        t
  };
};

export default useTranslation;