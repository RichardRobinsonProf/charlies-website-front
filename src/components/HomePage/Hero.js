import ImageHero from "../../images/RIL Assets-01.png";
import Team from "../../images/Team.png";
import Image from "react-bootstrap/Image";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";
import BlueButton from "./buttons/BlueButton";
import {Link} from 'react-router-dom'

function Hero() {
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
    <section id="section-hero">
      <div className="row ms-3 mb-5 mt-5 me-3">
        <div height={100}>
          <br></br>
          <br></br>
        </div>
        <div className="col-md-4 offset-md-1 col-12 mt-5 align-self-center">
          <h1 className="display-5 text-black">{text.heroTitle}</h1>
          <p className="text-black">{text.heroSubtitle}</p>
        </div>
        <div className="col-md-7 col-12 align-self-end mb-3">
            <div className="row justify-content-center">
          <Image className="d-none d-md-block w-75" src={ImageHero}/>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6 col-12">
        <div class="input-group offset-md-2">
            <input type="text" className="form-control border-top-0 border-end-0 border-start-0 me-3 rounded" placeholder="Correo electrónico" aria-label="Text input with button" aria-describedby="buttonAfter"/>
            <button type="button" className="bg-blue button-fit-content rounded" id="buttonAfter">¡Empieza tu programa hoy!</button>
            </div>
        </div>
        </div>
      </div>
      <div className="row mb-5 mt-5 me-2">
        <div className="col-md-6 col-12 mb-3">
          <div className="blue-circle align-items-center row mx-auto">
            <Image className="rounded" src={Team} width={"100%"}></Image>
          </div>
        </div>
        <div className="col-md-4 col-12 align-self-center">
          <h1 className="display-5 text-black ms-4">
            Aprende un nuevo idioma desde cualquier parte del mundo
          </h1>
          <p className="text-black ms-4">{text.aboutusParagraphOne}</p>
          <p className="text-black ms-4">{text.aboutusParagraphThree}</p>
          <span>
            <BlueButton
            text= {"¡Empieza tu programa hoy!"}
            extraClasses = {"ms-4"}
            link = "/prices"
            />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
