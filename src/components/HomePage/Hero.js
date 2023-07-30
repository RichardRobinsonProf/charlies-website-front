import ImageHero from "../../images/RIL Assets-01.png";
import Team from "../../images/Team.jpg";
import Image from "react-bootstrap/Image";
import { useContext, useState, useEffect } from "react";
import ContextChosenLanguage from "../../Context";
import { chosenLanguage } from "../../utils/language";
import BlueButton from "./buttons/BlueButton";
import useInput from "../../hooks/use-input";
import apiConnection from "../../api/apiConnection";
import "../FormPage/FormLayout.css";
import {useHistory} from 'react-router-dom'




function Hero() {
  const ctx = useContext(ContextChosenLanguage);
  const [text, setText] = useState(chosenLanguage(ctx.language));

  const [alertVisible, setAlertVisible] = useState(false);
  const history = useHistory()
  

  const isEmail = (value) => value.includes("@");

  useEffect(() => {
    if (ctx.language === "English") {
      setText(chosenLanguage("English"));
    } else {
      setText(chosenLanguage("Spanish"));
    }

  }, [ctx.language]);

  function submitHandler (e) {
    e.preventDefault();

    if (ctx.email !== '') {
      history.push('/prices')
    } else {
    if (!emailIsValid) {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 3000);
      return;
    }

    const data = {
      email: emailValue,
      language: ctx.language && ctx.language
    };

   apiConnection.post('/users/send-emailAddress', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
 

    ctx.setEmail(emailValue)
    resetemail()
    history.push('/prices')
  }
  }


  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput(isEmail);

  const emailClasses = emailHasError
  ? "form-group invalid"
  : "form-group";

  return (
    <section id="section-hero">
      <div className="p-md-5 p-3">
      <div className="row ms-md-3 mb-5 mt-5 me-md-2">
        <div height={100}>
          <br></br>
        </div>
        <div className="col-md-4 offset-md-1 col-12 mt-5 align-self-center">
          <h1 className="display-5 text-black wow opacity100">{text.heroTitle}</h1>
          <p className="text-black text-font wow opacity100">{text.heroSubtitle}</p>
        </div>
        <div className="col-md-7 col-12 align-self-end mb-3 ">
            <div className="row justify-content-center">
          <Image className="d-none d-md-block w-75" src={ImageHero} alt="imageHero"/>
          </div>
        </div>
        <div className="row m-0 p-0">
        <div className={`col-md-6 col-12  ${emailClasses}`}>
          <form onSubmit={submitHandler}>
        <div className="input-group offset-md-2">
            <input 
            type="email" 
            className="form-control mt-1 border-top-0 col-12 col-md-6 border-end-0 border-start-0 me-md-3 rounded wow opacity100 inputText" 
            placeholder={text.placeholderEmail}
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            />
            <button type="submit" className="bg-blue button-fit-content col-12 col-md-6 rounded wow opacity100Late inputButton" id="buttonAfter">{text.generalBlueButton}</button>  
            </div>
            <div className="row">
                <div className="col-md-6 col-12 "></div>
                {emailHasError && !alertVisible && (
                            <p className="error-text offset-md-2 text-center">{text.errorEmail}</p>
                          )}
                  {alertVisible && (
                            <p className="error-text offset-md-2 text-center">{text.errorEmail}</p>
                          )}
            </div>
            </form>
        </div>
        </div>
      </div>
      <div className="row mb-5 mt-5 ">
        <div className="col-md-6 col-11 mb-5 d-md-block d-none">
          <div className="blue-circle align-items-center row mx-md-auto">
            <Image className="rounded img-fluid wow opacity100" src={Team} width={"100%"} alt="team"></Image>
          </div>
        </div>
        <div className="col-md-4 col-12 align-self-center wow opacity100" id="aboutushero">
          <h1 className="display-5 text-black ms-md-4" >
            {text.aboutusTitle}
          </h1>
          <p className="text-black ms-md-4 text-font">{text.aboutusParagraphOne}</p>
          <p className="text-black ms-md-4 text-font">{text.aboutusParagraphThree}</p>
          <span>
            <BlueButton
            text= {text.generalBlueButton}
            extraClasses = {"ms-md-4 inputButton"}
            link = "/prices"
            />
          </span>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
