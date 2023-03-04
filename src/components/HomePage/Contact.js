import ReCAPTCHA from "react-google-recaptcha";
import {useContext,useState, useEffect,useRef} from 'react'
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'
import useInput from "../../hooks/use-input";
import "../FormPage/FormLayout.css";
import apiConnection from '../../api/apiConnection'
import ModalForm from "../FormPage/ModalForm";
import {AiOutlineMail} from 'react-icons/ai'
import {GiSmartphone} from 'react-icons/gi'
import {MdOutlineLocationOn} from 'react-icons/md'


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


  
  useEffect (() => {
      if (ctx.language === 'English') {
          setText(chosenLanguage('English'))
      } else {
          setText(chosenLanguage('Spanish'))
      }
  },[ctx.language])

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);

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
    if (value.length < 8 || value.length > 20) {
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
  if (nameIsValid && emailIsValid && phoneIsValid && captchaValido && message !== '') {
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
    <section id="contactus" className="text-font">
      <div className="text-center">
        <ModalForm
        show= {show}
        handleClose= {handleClose}
        title= {text.alertMessageSent}
        body= {text.alertyoullbecontacted}
        negative="none"
        positive= {text.buttonClose}
        handlePositive= {handleClose}
        />
          <div className="align-items-center text-md-center bg-transparent mx-5">     
            <form  onSubmit={submitHandler}>
            <h1 className="display-5 text-start text-md-center text-white mb-md-5 mb-2 pt-5">{text.contactTitle}</h1>
              <div className="row">
              <div className="col-12 offset-md-1 col-md-5 text-start">
             
             <p className="mt-2">
                <i> <AiOutlineMail
                    color="white"
                    size="1.5em"
                    className="me-1"
                    /><span className="text-white lead">info@robinsonsinstitute.com</span></i>  
                 </p> 
                <p className="mt-2">
                <i> <GiSmartphone
                    color="white"
                    size="1.5em"
                    className="me-1"
                    /><span className="text-white lead">+54 911 5062 9324</span></i>  
                 </p>   
                 <p className="mt-2">   
                <i> <MdOutlineLocationOn
                    color="white"
                    size="1.5em"
                    className="me-1"
                    /><span className="text-white lead">Palermo, Capital Federal, Argentina</span></i>  
                   </p>         
                </div>
                <div className="col-12 col-md-5">
                  <div className= {nameClasses} >
                    <label htmlFor="name" className="form-label visually-hidden">
                      <p className="lead text-black"></p>
                    </label>
                    <input
                        type="text"
                        className="form-control text-white bg-transparent border-top-0 border-end-0 border-start-0"
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
                    <label htmlFor="email" className="form-label visually-hidden">
                      <p className="lead text-black"></p>
                    </label>
                    <input
                        type="email"
                        className="form-control text-white bg-transparent border-top-0 border-end-0 border-start-0"
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
                    <label htmlFor="Telephone" className="form-label visually-hidden">
                      <p className="lead text-black"></p>
                    </label>
                    <input
                        type="tel"
                        className="form-control text-white bg-transparent border-top-0 border-end-0 border-start-0"
                        placeholder= {text.placeholderTelephone}
                        value={phoneValue}
                        onChange={phoneChangeHandler}
                        onBlur={phoneBlurHandler}

                    />
                  </div>
                  {phoneHasError && (
                    <p className="error-text">{text.errorTelephone}</p>
                  )}
                  <div >
                    <label htmlFor="message" className="form-label visually-hidden">
                      <p className="lead text-black"></p>
                    </label>
                    <textarea
                      onChange={messageChangeHandler}
                      id="message"
                      className="form-control placeholder-bottom text-white bg-transparent border-top-0 border-end-0 border-start-0"
                      rows="5"
                      placeholder={text.placeholderMessage}
                      name="message"
                      value={message}
                    ></textarea>
                  </div>
                 
                <div className="row me-0 ms-0">
                
                          <button
                            name="action"
                            id="action"
                            type="submit"
                            className="bg-blue mb-3">
                            {text.contactButton}
                          </button>
                          {showErrorForm && (
                        <p className="error-text">{text.errorFormMessage}</p>
                      )}
                <div className="row justify-content-end mb-3">
                <ReCAPTCHA
                      className= "captcha"
                      ref={recaptchaRef}
                      sitekey={process.env.REACT_APP_SITE_KEY}
                      theme="dark"
                      onChange={onChangeCaptcha}
                    />
                </div>
                  </div>
                </div>
              </div>
            </form>
        </div>
      </div>
    </section>
	
  );
}

export default Contact;
