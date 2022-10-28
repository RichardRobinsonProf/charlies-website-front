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
		console.log(ctx.language)
		if (ctx.language === 'English') {
			setText(chosenLanguage('English'))
		} else {
			setText(chosenLanguage('Spanish'))
		}
	},[ctx.language])
    return (
        <section id="prices">
			<div className='row justify-content-center mb-5'>
			<div className= 'col-8 col-md-3 mt-3'>
					<div className='light-blue text-center pb-5'>
					<Image className=" w-50" src={Starter}/>
					<div>
						<h1 className="display-5 text-black">Starter</h1>
						<p>1 hora por semana</p>
					</div> 

						<BlueButton
							text= {"¡Empieza tu programa hoy!"}
							link = "/prices"/>
					</div>
					
				</div> 
				<div className= 'col-8 col-md-3 mt-3'>
					<div className='light-blue text-center pb-5'>
					<Image className=" w-50" src={SemiPro}/>
					<div>
						<h1 className="display-5 text-black">Semi-pro</h1>
						<p>1 hora por semana</p>
					</div>
					<BlueButton
							text= {"¡Empieza tu programa hoy!"}
							link = "/prices"/>
					</div>
					
				</div> 
				<div className= 'col-8 col-md-3 mt-3'>
					<div className='light-blue text-center pb-5'>
					<Image className=" w-50" src={Pro}/>
					<div>
						<h1 className="display-5 text-black">Pro</h1>
						<p>1 hora por semana</p>
					</div>
					<BlueButton
							text= {"¡Empieza tu programa hoy!"}
							link = "/prices"/>
					</div>
					
				</div> 
			</div>
        
        </section>
    )
}

export default Prices;