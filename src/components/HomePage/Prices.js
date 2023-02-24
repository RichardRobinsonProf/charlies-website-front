import { useContext, useState, useEffect } from 'react';
import ContextChosenLanguage from '../../Context';
import { chosenLanguage } from '../../utils/language';
import {Image} from 'react-bootstrap'
import Starter from "../../images/RIL Assets-04.png";
import SemiPro from "../../images/RIL Assets-05.png";
import Pro from "../../images/RIL Assets-06.png";
import BlueButton from "../HomePage/buttons/BlueButton";


function Prices () {
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
        <section id="prices">
			<div className='p-5'> 
			<div className='row justify-content-center mb-5'>
			<div className= 'col-8 col-md-3 mt-3'>
					<div className='light-blue text-center py-3 pb-md-5 text-font px-3'>
					<Image className=" w-50" src={Starter} alt="starter"/>
					<div>
						<h1 className="display-5 text-black">Starter</h1>
						<p>{text.starterSubtitle}</p>
					</div> 

						<BlueButton
							text= {text.generalBlueButton}
							link = "/prices"
							extraClasses ="p-2 "
							/>
					</div>
					
				</div> 
				<div className= 'col-8 col-md-3 mt-3 text-font'>
					<div className='light-blue text-center py-3 pb-md-5 px-3'>
					<Image className=" w-50" src={SemiPro} alt="semiPro"/>
					<div>
						<h1 className="display-5 text-black">Semi-pro</h1>
						<p> {text.semiProSubtitle}</p>
					</div>
					<BlueButton
							text= {text.generalBlueButton}
							link = "/prices"
							extraClasses ="p-2 "
							/>
					</div>
					
				</div> 
				<div className= 'col-8 col-md-3 mt-3 text-font'>
					<div className='light-blue text-center py-3 px-3 pb-md-5'>
					<Image className=" w-50" src={Pro} alt="pro"/>
					<div>
						<h1 className="display-5 text-black">Pro</h1>
						<p>{text.proSubtitle}</p>
					</div>
					<BlueButton
							text= {text.generalBlueButton}
							link = "/prices"
							extraClasses ="p-2 "
							/>
					</div>
					
				</div> 
			</div>
			</div>
        </section>
    )
}

export default Prices;