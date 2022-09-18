import {  Container } from 'react-bootstrap';
import { useContext, useState, useEffect } from 'react';
import ContextChosenLanguage from '../../Context';
import { chosenLanguage } from '../../utils/language';
import ThreedotsCollapse from "./buttons/ThreedotsCollapse";

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
        <section id= "prices">
        <Container>
        <div className  = "text-center">
             <h1 className="display-5 text-center ">{text.pricesTitle}</h1>
             <div className="row mx-auto">
					<div className="col-12 col-md-4 mb-4">
						<div className="card card-outline-success border-primary">
							<div className="card-header bg-success text-black text-center">
								<h1 className="display-6 text-center ">{text.starterTitle}</h1>
								<h4 className="text-center">{text.starterSubtitle}</h4>
							</div>
							<div className="card-body">
								
				
									<ThreedotsCollapse
									text= {<p className='lead'>{text.starterText}</p>}
									/>
								
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-4">
						<div className="card card-outline-warning border-primary">
							<div className="card-header bg-warning text-black text-center">
								<h2 className="display-6 text-center ">{text.semiProTitle}</h2>
								<h4>{text.semiProSubtitle}</h4>
							</div>
							<div className="card-body">							
								<ThreedotsCollapse
									text= {<p className='lead'>{text.semiProText}</p>}
									/>						
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 mb-4">
						<div className="card card-outline-danger border-primary">
							<div className="card-header bg-danger text-black text-center">
								<h2 className="display-6 text-center">{text.proTitle}</h2>
								<h4>{text.proSubtitle}</h4>
							</div>
							<div className="card-body">
								<ThreedotsCollapse
										text= {<p className='lead'>{text.proText}</p>}
									/>				
							</div>
						</div>
					</div>
				</div>
        </div>
        </Container>
        </section>
    )
}

export default Prices;