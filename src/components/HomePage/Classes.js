
import {  Image} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";
import ImageClasses from "../../images/RIL Assets-03.png";
import WOW from 'wowjs'

function ContainerCards() {
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
    <section id="classes" className="pt-5 ps-md-5 pe-md-4 text-font p-3 p-md-5">
  <div className="row text-md-center">
        <h1 className="display-5 text-black wow opacity100">{text.pricesTitle}</h1>
      </div>
    <div className="row ms-md-3 me-md-3">
        <div className= "col-md-5 offset-md-1 wow opacity100Late">
          <p>
            {text.classesParagraphOne}
          </p>
        </div>
        <div className= "col-md-5">
          <p>
          <Image className=" w-100" src={ImageClasses} alt="imageClasses"/>
          </p>
        </div>
    </div>
    </section>

  );
}

export default ContainerCards;
