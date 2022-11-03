import {GrInstagram,GrFacebook } from 'react-icons/gr';
import {HashLink as Link} from 'react-router-hash-link';
import { useContext, useState, useEffect } from 'react';
import ContextChosenLanguage from '../../Context';
import { chosenLanguage } from '../../utils/language';


function Footer () {
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
        <section id="footer" className= "p-5" >
            <div className='row text-white'>
            <div className="col-12 offset-md-1 col-md-4">
                <h4 className='mb-3'>{text.footerAbout}</h4>
                    <div className="opacity-50">
                    <p><Link to='/#aboutus' className="text-decoration-none text-white">{text.footerLanguageCourses}</Link></p>
                    <p><Link to='/#aboutus' className="text-decoration-none text-white">{text.footerGroupClasses}</Link></p>
                    <p><Link to='/translations' className="text-decoration-none text-white">{text.footerTranslationService}</Link></p>
                    <p><Link to='/prices' className="text-decoration-none text-white">{text.footerPackages} </Link></p>
                    <p><Link to='/#reviews' className="text-decoration-none text-white">{text.footerReviews} </Link></p>
                    <p><Link to='#contactus' className="text-decoration-none text-white">{text.footerContact} </Link></p>
                    </div>
                </div>   <div className="col-12 col-md-4">
                <h4 className='mb-3'>{text.footerContact}</h4>
                    <div className="opacity-50">
                    <p className="text-decoration-none text-white">contacto@robinsonsinstituteoflanguage.com</p>
                    <p  className="text-decoration-none text-white">+54 555 5555</p>
                    <p  className="text-decoration-none text-white">Carranza 55, Capital Federal, Argentina</p>
                    
                    </div>
                </div>   <div className="col-12 col-md-3">
                <h4 className='mb-3'>{text.footerFollowUs}</h4>
                        <i>
                        <GrInstagram
                         color="white"
                         size="1.5em"
                         className="me-3 pointer"
                         onClick={() => window.open('https://www.instagram.com/robinsonsinstitute/')}
                        
                        />
                        </i>
                        <i>
                        <GrFacebook
                            color="white"
                            size="1.5em"
                            className="me-1 pointer"
                            onClick={() => window.open('https://www.facebook.com/RobinsonsInstituteofLanguages')}
                        />
                        </i>
                </div>  
            </div>
            
    </section>

    )
}

export default Footer;