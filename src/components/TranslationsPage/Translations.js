import {Image} from 'react-bootstrap'
import ImageTranslation from '../../images/RIL Assets-07.png'
import { useContext, useState, useEffect } from 'react';
import ContextChosenLanguage from '../../Context';
import { chosenLanguage } from '../../utils/language';
import { HashLink as Link } from 'react-router-hash-link';
import WOW from 'wowjs'

function Translations (props) {
    const ctx = useContext(ContextChosenLanguage)
	const [text, setText] = useState(chosenLanguage(ctx.language))
	
	useEffect (() => {
	
		if (ctx.language === 'English') {
			setText(chosenLanguage('English'))
		} else {
			setText(chosenLanguage('Spanish'))
		}
        new WOW.WOW({
            live: false
          }).init();
    },[ctx.language])
    return (
        <div id="toptranslations">
            <div className="pt-5 ps-5 pe-5 " id="TranslationPage">
            <div className="row mt-5 text-font">
                <div className="col-md-4 col-12 offset-md-1 align-self-center">
                <h1 className="display-5 text-black wow opacity100">{text.translationsTitle}</h1>
                <p className='wow opacity100Late'>{props.translationsParagraphOne}</p>  
                    </div>
                    <div className="col-md-7 col-12">
                <Image src={ImageTranslation} alt="ImageTranslation" className="img-fluid d-none d-md-block w-50 d-flex mx-auto"/>
                    </div>
            </div>
         
            <div className="row mt-5">
                <div className="col-md-5 col-12 offset-md-1">
                <h1 className="display-5 text-black wow opacity100">{props.translationsPublic}</h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <ul className="ps-0 ms-0 text-font wow opacity100Late">
                            <li>{props.translationsPublicListOne}</li>
                            <li>{props.translationsPublicListTwo}</li>
                            <li>{props.translationsPublicListThree}</li>
                            <li>{props.translationsPublicListFour}</li>
                            <li>{props.translationsPublicListFive}</li>
                            <li>{props.translationsPublicListSix}</li>
                            <li>{props.translationsPublicListSeven}</li>
                            <li>{props.translationsPublicListEight}</li>
                            <li>{props.translationsPublicListNine}</li>
                        </ul>
                    </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-5 col-12 offset-md-1">
                    <ul  className="ps-0 ms-0 pe-5 text-font wow opacity100Late ">
                        <li>{props.translationsPrivateListOne}</li>
                        <li>{props.translationsPrivateListTwo}</li>
                        <li>{props.translationsPrivateListThree}</li>
                        <li>{props.translationsPrivateListFour}</li>
                        <li>{props.translationsPrivateListFive}</li>
                        <li>{props.translationsPrivateListSix}</li>
                     </ul>
                    </div>
                    <div className="col-md-6 col-12 order-first order-md-last">
                        <h1 className="display-5 text-black wow opacity100">{props.translationsPrivate}</h1> 
                    </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-md-5 col-12 offset-md-1">
                <h1 className="display-5 text-black wow opacity100">{props.translationsInterpretation}</h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <ul className="ps-0 ms-0 text-font wow opacity100Late">
                            <li>{props.translationsInterpretationListOne}</li>
                            <li>{props.translationsInterpretationListTwo}</li>
                            <li>{props.translationsInterpretationListThree}</li>
                        </ul>
                            </div>
                         </div>
                    </div>
                <div>        
            </div>  
     <div className = "bg-orange">
        <div className="p-5 text-md-center text-font">
        
        <h1 className="display-5 text-black mt-5 wow opacity100">{text.translationOrangeBgTitle}</h1>
        <h1 className="display-5 text-black wow opacity100Late ">{text.translationOrangeBgSubtitle}!</h1>
        <p className='pb-0 mb-0 w-md-50 mx-auto wow opacity100Late'>{text.translationOrangeBgParagraphOne}</p>
        <p className='wow opacity100Late'>{text.translationOrangeBgParagraphTwo}</p>

        <Link to="/translations#contactus">
        <button className="bg-blue mb-5 wow opacity100Latest">
        {text.translationOrangeBgButton}
        </button>
        </Link>
        </div>
        </div>
 
    </div>
  
    )
}

export default Translations