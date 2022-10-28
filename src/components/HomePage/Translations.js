import { Image } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'
import ImageClasses from "../../images/RIL Assets-07.png";
import BlueButton from "../HomePage/buttons/BlueButton";


function Translations() {
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
    <section id="translations">
       <div className="row ms-3 me-3 align-items-center">
        <div className= "col-md-5 offset-md-1 mt-5">
        <h1 className="display-5 text-black">Servicios de traducciones</h1>
          <p>
            {text.translationsParagraphOne}
          </p>
          <BlueButton
							text= {"Ver más sobre nuestro servicio de traducciones"}
							link = "/translations"/>
        </div>
        <div className= "col-md-5">
          <div className="row text-center">
          <p>
          <Image className="w-75 offset-md-1" src={ImageClasses}/>
          </p>
          </div>
        </div>
    </div>
    </section>
  );
}

export default Translations;
