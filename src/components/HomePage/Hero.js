import Logo from '../../images/Logo.png'
import Image from 'react-bootstrap/Image'
import {useContext,useState, useEffect} from 'react'
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'



function Hero () {
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
    <section id="section-hero" className="text-center text-white d-flex justify-content-center align-items-center py-5">
    
        <div className="container">
            <br></br>
           
            <br></br>
            <Image className="img-fluid" src={Logo}></Image>
            <br></br>
            <br></br>
            <br></br>
            <p className="display-6 text-black">{text.heroTitle}</p>
            <br></br>
            <p className="lead text-black">{text.heroSubtitle}</p>
            <p className="lead text-black">{text.heroSubtitletwo} <span className='display'></span></p>

            <br></br>
            
       
            <a href="#classes" className="btn btn-lg btn-primary text-white"><i className="" aria-hidden="true">{text.buttonMoreInfo}</i> </a>
        
        </div>
    </section>
    )
}

export default Hero;