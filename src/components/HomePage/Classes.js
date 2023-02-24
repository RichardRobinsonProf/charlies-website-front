
import {  Image} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";
import ImageClasses from "../../images/RIL Assets-03.png";

function ContainerCards() {
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
    <section id="classes" className="pt-5 ps-5 pe-4  text-font">
  <div className="row text-md-center ms-3 ms-md-0">
        <h1 className="display-5 text-black">{text.pricesTitle}</h1>
      </div>
    <div className="row ms-3 me-3">
        <div className= "col-md-5 offset-md-1">
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
