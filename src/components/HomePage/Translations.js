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
  
      if (ctx.language === 'English') {
          setText(chosenLanguage('English'))
      } else {
          setText(chosenLanguage('Spanish'))
      }
  },[ctx.language])

  return (
    <section id="translations" className="ps-5 pe-3 pt-2 pt-md-0">
       <div className="row ms-3 me-3 align-items-center">
        <div className= "col-md-5 offset-md-1 mt-5 mt-md-0">
        <h1 className="display-5 text-black">{text.translationsTitle}</h1>
          <p>
            {text.translationsParagraphOne}
          </p>
          <BlueButton
							text= {text.translationButton}
							link = "/translations"
              extraClasses= "ms-0"
              />
        </div>
        <div className= "col-md-5">
          <div className="row text-center">
          <p>
          <Image className="w-75 offset-md-1" src={ImageClasses} alt="imageClasses"/>
          </p>
          </div>
        </div>
    </div>
    </section>
  );
}

export default Translations;
