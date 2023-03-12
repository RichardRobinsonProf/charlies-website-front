import { Image} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";
import ImageLograrMas from "../../images/RIL Assets-02.png";
import WOW from "wowjs";
import {BsCheckLg} from 'react-icons/bs'



function AboutUs() {
  const ctx = useContext(ContextChosenLanguage);
  const [text, setText] = useState(chosenLanguage(ctx.language));


  useEffect(() => {
    if (ctx.language === "English") {
      setText(chosenLanguage("English"));
    } else {
      setText(chosenLanguage("Spanish"));
    }
    new WOW.WOW({
      live: false
  }).init();
    
  }, [ctx.language]);
  return (
    <section id="aboutus" className="p-md-5 pt-5 p-3">
      <div className="">
      <div className="row me-md-2">
        <div className="col-md-5 mx-md-auto text-md-center mt-2">
        <h1 className="display-5 text-black wow opacity100">{text.classesTitle}</h1>
           <p className="text-black text-font wow opacity100">{text.classesParagraph}</p>
          </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-9">
          <div className="row justify-content-end">
          <Image className="w-75" src={ImageLograrMas} alt="imageLograrMas"/>
          </div>
          </div>
          <div className=" col-md-5 mt-md-5 order-first order-md-last wow opacity100">
          <ul className="mt-md-5 text-font textDecoNone p-0">
            <li className="wow opacity100Late "><BsCheckLg
            color="green"
            size="1.5em"
            className="me-1"
            />{text.classesVirtual}</li>
            <li className="mt-2 wow opacity100">
            <BsCheckLg
            color="green"
            size="1.5em"
            className="me-1"
            />{text.classesGroupAndIndividual}</li>
          </ul>
          </div>
        </div>
        </div>
    </section>
  );
}

export default AboutUs;
