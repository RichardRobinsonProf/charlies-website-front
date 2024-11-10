import { useContext, useState, useEffect } from 'react';
import ContextChosenLanguage from '../../Context';
import { chosenLanguage } from '../../utils/language';
import {Image} from 'react-bootstrap'
import Starter from "../../images/RIL Assets-04.png";
import SemiPro from "../../images/RIL Assets-05.png";
import Pro from "../../images/RIL Assets-06.png";
import BlueButton from "../HomePage/buttons/BlueButton";
import WOW from 'wowjs'


function Prices () {
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
        <section id="prices">
			<div className='p-md-5 p-3 pt-0'> 
			<div className='row justify-content-center mb-5'>
			<div className= 'col-12 col-md-3 mt-3 wow opacity100'>
					<div className='light-blue text-center p-5 p-md-3 pb-md-5 text-font rounded'>
					<Image className=" w-50" src={Starter} alt="starter"/>
					<div>
						<h1 className="display-5 text-black">Starter</h1>
						<p>{text.starterSubtitle}</p>
					</div> 

						<BlueButton
							text= {text.generalBlueButton}
							link = "/prices"
							extraClasses ="p-2 inputButton"
							/>
					</div>
					
				</div> 
				<div className= 'col-12 col-md-3 mt-3 wow opacity100Late'>
					<div className='light-blue text-center p-5 p-md-3 pb-md-5 text-font rounded'>
					<Image className=" w-50" src={SemiPro} alt="semiPro"/>
					<div>
						<h1 className="display-5 text-black">Semi-pro</h1>
						<p> {text.semiProSubtitle}</p>
					</div>
					<BlueButton
							text= {text.generalBlueButton}
							link = "/prices"
							extraClasses ="p-2 inputButton"
							/>
					</div>
					
				</div> 
				<div className= 'col-12 col-md-3 mt-3 wow opacity100Latest'>
					<div className='light-blue text-center p-5 p-md-3 pb-md-5 text-font rounded'>
					<Image className=" w-50" src={Pro} alt="pro"/>
					<div>
						<h1 className="display-5 text-black">Pro</h1>
						<p>{text.proSubtitle}</p>
					</div>
					<BlueButton
							text= {text.generalBlueButton}
							link = "/prices"
							extraClasses ="p-2 inputButton"
							/>
					</div>
					
				</div> 
			</div>
			</div>
        </section>
    )
}

export default Prices;