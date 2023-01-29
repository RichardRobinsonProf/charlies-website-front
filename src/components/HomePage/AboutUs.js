import { Image} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";
import ImageLograrMas from "../../images/RIL Assets-02.png";
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
  }, [ctx.language]);
  return (
    <section id="aboutus">
      <div className="p-5 ">
      <div className="row me-2">
        <div className="col-md-5 mx-md-auto text-md-center ms-4 mt-2">
        <h1 className="display-5 text-black ">{text.classesTitle}</h1>
           <p className="text-black text-font">{text.classesParagraph}</p>
          </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-9">
          <div className="row justify-content-end ">
          <Image className="w-75" src={ImageLograrMas}/>
          </div>
          </div>
          <div className=" col-md-5 mt-md-5 order-first order-md-last">
          <ul className="mt-md-5 text-font">
            <li><BsCheckLg
            color="green"
            size="1.5em"
            className="me-1"
            />{text.classesVirtual}</li>
            <li className="mt-2">
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
