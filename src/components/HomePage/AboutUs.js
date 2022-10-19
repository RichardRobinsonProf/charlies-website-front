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
    console.log(ctx.language);
    if (ctx.language === "English") {
      setText(chosenLanguage("English"));
    } else {
      setText(chosenLanguage("Spanish"));
    }
  }, [ctx.language]);
  return (
    <section id="aboutus">
      <div className="row pt-5">
        <div className="col-md-5 mx-auto text-center mt-2">
        <h1 className="display-5 text-black">Logra más con RIL</h1>
           <p className="text-black">Desbloquea el poder de tu camino personalizado de aprendizaje para lograr tus objetivo de idioma rapido. ¡Descubre cuán fácil y divertido puede ser aprender un nuevo idioma con Robinson Institute of Language!</p>
          </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row justify-content-end">
          <Image className=" w-75" src={ImageLograrMas}/>
          </div>
          </div>
          <div className=" col-md-5 mt-md-5">
          <ul className="mt-md-5">
            <li><BsCheckLg
            color="green"
            size="1.5em"
            className="me-1"
            />Classes Virtuales</li>
            <li className="mt-2">
            <BsCheckLg
            color="green"
            size="1.5em"
            className="me-1"
            />Classes Individuales y Grupales</li>
          </ul>
          </div>
        </div>
      
    </section>
  );
}

export default AboutUs;
