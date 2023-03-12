import {GrInstagram,GrFacebook } from 'react-icons/gr';
import {HashLink as Link} from 'react-router-hash-link';
import { useContext, useState, useEffect } from 'react';
import ContextChosenLanguage from '../../Context';
import { chosenLanguage } from '../../utils/language';


function Footer () {
    const ctx = useContext(ContextChosenLanguage)
	const [text, setText] = useState(chosenLanguage(ctx.language))
	
	useEffect (() => {
		if (ctx.language === 'English') {
			setText(chosenLanguage('English'))
		} else {
			setText(chosenLanguage('Spanish'))
		}
	},[ctx.language])
    return (
        <section id="footer" className= "p-5 text-font" >
            <div className='row text-white text-center'>
            <div className="col-12 col-md-4">
                <h4 className='mb-3'>{text.footerAbout}</h4>
                    <div>
                        <p><Link to='/#aboutus' className="text-decoration-none text-white hover opacity-50">{text.footerLanguageCourses}</Link></p>
                        <p><Link to='/#aboutus' className="text-decoration-none text-white hover opacity-50 ">{text.footerGroupClasses}</Link></p>
                        <p><Link to='/translations' className="text-decoration-none text-white hover opacity-50">{text.footerTranslationService}</Link></p>
                        <p><Link to='/prices' className="text-decoration-none text-white hover opacity-50">{text.footerPackages} </Link></p>
                        <p><Link to='/#reviews' className="text-decoration-none text-white hover opacity-50">{text.footerReviews} </Link></p>
                        <p><Link to='#contactus' className="text-decoration-none text-white hover opacity-50">{text.footerContact} </Link></p>
                    </div>
                </div>   
                <div className="col-12 col-md-4">
                <h4 className='mb-3'>{text.footerContact}</h4>
                    <div className="opacity-50">
                        <p className="text-decoration-none text-white">info@robinsonsinstitute.com</p>
                        <p className="text-decoration-none text-white">+54 911 5062 9324</p>
                        <p className="text-decoration-none text-white">Palermo, Capital Federal, Argentina</p>                    
                    </div>
                </div>   <div className="col-12 col-md-4">
                <h4 className='mb-3'>{text.footerFollowUs}</h4>
                        <i>
                        <GrInstagram
                         color="white"
                         size="1.5em"
                         className="me-3 pointer hover"
                         onClick={() => window.open('https://www.instagram.com/robinsonsinstitute/')}
                        />
                        </i>
                        <i>
                        <GrFacebook
                            color="white"
                            size="1.5em"
                            className="me-1 pointer hover"
                            onClick={() => window.open('https://www.facebook.com/RobinsonsInstituteofLanguages')}
                        />
                        </i>
                </div>  
            </div>
            
    </section>

    )
}

export default Footer;