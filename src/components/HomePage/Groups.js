import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {useContext,useState, useEffect} from 'react'
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'

function Groups () {
    const ctx = useContext(ContextChosenLanguage)
    const [text, setText] = useState(chosenLanguage(ctx.language))
    
    useEffect (() => {
        console.log(ctx.language)
        if (ctx.language === 'English') {
            setText(chosenLanguage('English'))
        } else {
            setText(chosenLanguage('Spanish'))
        }
    },[ctx.language])
    return (
        <section id = "groups">
        <div className="text-center">
        <h1 className="display-6 text-center ">{text.groupsTitle}</h1>
        <Link to= '/form'>
        <Button className="btn btn-lg btn-primary text-white" >
        {text.groupsButton}
    </Button>
    </Link>
    </div>
    </section>
    )
}

export default Groups