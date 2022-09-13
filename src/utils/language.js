import {English} from '../text/text-english'
import {Spanish} from '../text/text-spanish'

export function chosenLanguage (language) 
{
    if (language === 'English') {
        return English
    } else  {
        return Spanish
    }
} 

