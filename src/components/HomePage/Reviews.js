import {Image} from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'
import Woman from "../../images/woman.jpg";
import Man from "../../images/man.jpg";
import WOW from 'wowjs'


function Reviews() {
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
    <section id="reviews" className="text-font p-md-5 p-3">
      <div>
        <div className="row pt-md-3 text-center ms-md-0">
        <h1 className="display-5 text-black wow opacity100">{text.reviewsTitle}</h1>
      </div>
      <div className='row justify-content-center mb-5'>
			<div className= 'col-12 col-md-3 mt-3 wow opacity100'>
					<div className='light-blue text-center pb-5 pt-5'>
					<Image className=" w-50 rounded-circle" src={Woman} alt="woman"/>
					<div className="px-3">
						<h1 className="display-5 text-black mt-3">Andrea</h1>
            <p className= "text-muted" >
            English teacher and translator
            </p>
						<p>"Richard helped me a lot to gain speed in speaking, now I can speak fluently in my work meetings as well as help me with my syntax writing proposals"</p>
					</div>
					</div>
				</div> 
        <div className= 'col-12 col-md-3 mt-3 wow opacity100Late'>
					<div className='light-blue text-center pb-5 pt-5 px-2'>
					<Image className=" w-50 rounded-circle" src={Man} alt="man"/>
					<div className="px-3">
						<h1 className="display-5 text-black mt-3">Lester</h1>
            <p className= "text-muted" >
              Software developer
            </p>
						<p>"The Institute offered me the possibility to incorporate the classes in a flexible way, adapting them to the rhythm of my work and free time."</p>
					</div>
					</div>
				</div> 


			</div>

      </div>
     
    </section>
  );
}

export default Reviews;
