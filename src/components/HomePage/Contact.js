import { Container,Modal, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import {useContext,useState, useEffect,useRef} from 'react'
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'
import useInput from "../../hooks/use-input";
import "../../pages/FormLayout.css";
import apiConnection from '../../api/apiConnection'
import ModalForm from "../FormPage/ModalForm";

function Contact() {
  //https://www.google.com/recaptcha/admin/create

  const [captchaValido, setCaptcha] = useState(false);
  const recaptchaRef = useRef(null);
  const ctx = useContext(ContextChosenLanguage)
  const [text, setText] = useState(chosenLanguage(ctx.language))
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false)
  const [showErrorForm, setShowErrorForm] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  useEffect (() => {
      if (ctx.language === 'English') {
          setText(chosenLanguage('English'))
      } else {
          setText(chosenLanguage('Spanish'))
      }
  },[ctx.language])

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
    console.log(message)
  };



  const onChangeCaptcha = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      setCaptcha(true);
    }
  };


  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  function validatePhoneNumber(value) {
    if (value.length < 8 || value.length > 15) {
      return false;
    }
    else {
      return true;
    }

  }
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetname,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput(isEmail);
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetphone,
  } = useInput(validatePhoneNumber);

 

  let formIsValid = false;
  if (nameIsValid && emailIsValid && phoneIsValid && captchaValido && message != '') {
    formIsValid = true;
  } 

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setShowErrorForm(true)
      return;
    }

    const data = {
      email: emailValue,
      telephone: phoneValue,
      name: nameValue,
      message: message};



      apiConnection.post('/users/send-email', data)
      .then(response => {
        setShow(true)
      })
      .catch(error => {
          console.log(error)
      })

    resetname();
    resetemail();
    resetphone();
    setMessage('');
      };

 const nameClasses = nameHasError
    ? "form-group invalid"
    : "form-group";
  const emailClasses = emailHasError
    ? "form-group invalid"
    : "form-group";
  const phoneClasses = phoneHasError
    ? "form-group invalid"
    : "form-group ";


  
  return (
    <section id="contactus">
      <div className="text-center">
        <h1 className="display-5 text-center">{text.contactTitle}</h1>
        <ModalForm
        show= {show}
        handleClose= {handleClose}
        title= {text.alertMessageSent}
        body= {text.alertyoullbecontacted}
        negative="none"
        positive= {text.buttonClose}
        handlePositive= {handleClose}
        />
          <div className="align-items-center text-center bg-light container container-contact">
          <br></br>
          <Container>
            <form className="mb-4" onSubmit={submitHandler}>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className= {nameClasses} >
                    <label htmlFor="name" className="form-label">
                      <p className="lead text-black"></p>
                    </label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder= {text.placeholderName}
                        value={nameValue}
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                    />
                  </div>
                  {nameHasError && (
                    <p className="error-text">{text.errorFirstName}</p>
                  )}

                  <div className={emailClasses}>
                    <label htmlFor="email" className="form-label">
                      <p className="lead text-black"></p>
                    </label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder= {text.placeholderEmail}
                        value={emailValue}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                  </div>
                  {emailHasError && (
                    <p className="error-text">{text.errorEmail}</p>
                  )}
                  <div className={phoneClasses}>
                    <label htmlFor="Telephone" className="form-label">
                      <p className="lead text-black"></p>
                    </label>
                    <input
                        type="tel"
                        className="form-control mt-1"
                        placeholder= {text.placeholderTelephone}
                        value={phoneValue}
                        onChange={phoneChangeHandler}
                        onBlur={phoneBlurHandler}

                    />
                  </div>
                  {phoneHasError && (
                    <p className="error-text">{text.errorTelephone}</p>
                  )}
                </div>
                <div className="col-12 col-md-6">
                  <div className= "mb-3">
                    <label htmlFor="message" className="form-label">
                      <p className="lead text-black"></p>
                    </label>
                    <textarea
                      onChange={messageChangeHandler}
                      id="message"
                      className="form-control"
                      rows="10"
                      placeholder={text.placeholderMessage}
                      name="message"
                      value={message}
                    ></textarea>
                  </div>
                </div>
              </div>
			  <ReCAPTCHA
			      className= "captcha"
				  ref={recaptchaRef}
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  theme="light"
                  onChange={onChangeCaptcha}
                />
              <div className="mb-3">
                <button
                  name="action"
                  id="action"
                  type="submit"
                  className="btn btn-lg btn-primary text-white button-form"
                >
                  {text.contactButton}
                </button>
                {showErrorForm && (
              <p className="error-text">{text.errorFormMessage}</p>
            )}
              </div>
            </form>
        
          </Container>
        </div>
      </div>
	  <div className="right-align">
                
              </div>
    </section>
	
  );
}

export default Contact;
