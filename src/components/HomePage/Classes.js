
import {  Image} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";
import {Link} from 'react-router-dom'
import ImageClasses from "../../images/RIL Assets-03.png";
import {BlueButton} from './buttons/BlueButton'
function ContainerCards() {
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
    <section id="classes">
  <div className="row pt-5 text-md-center ms-3">
        <h1 className="display-5 text-black">Mira nuestros planes</h1>
      </div>
    <div className="row ms-3 me-3">
        <div className= "col-md-5 offset-md-1">
          <p>
            {text.classesParagraphOne}
          </p>
        </div>
        <div className= "col-md-5">
          <p>
          <Image className=" w-100" src={ImageClasses}/>
          </p>
        </div>
    </div>
    </section>

  );
}

export default ContainerCards;
