import { Container } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import {useContext,useState, useEffect,useRef} from 'react'
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'

function Contact() {
  //https://www.google.com/recaptcha/admin/create

  const [captchaValido, setCaptcha] = useState(false);
  const recaptchaRef = useRef(null);
  const ctx = useContext(ContextChosenLanguage)
  const [text, setText] = useState(chosenLanguage(ctx.language))
  
  useEffect (() => {
      console.log(ctx.language)
      if (ctx.language === 'English') {
          setText(chosenLanguage('English'))
      } else {
          setText(chosenLanguage('Spanish'))
      }
  },[ctx.language])

  const onChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      setCaptcha(true);
    }
  };

  return (
    <section id="contactus">
      <div className="text-center">
        <h1 className="display-6 text-center">{text.contactTitle}</h1>

        <div className="align-items-center text-center bg-light container">
          <br></br>
          <Container>
            <form className="mb-4">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <p className="lead text-black">{text.contactName}</p>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder={text.placeholderName}
                      name="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <p className="lead text-black">{text.contactEmail}</p>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder={text.placeholderEmail}
                      name="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Telephone" className="form-label">
                      <p className="lead text-black">{text.contactTelephone}</p>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder={text.placeholderTelephone}
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      <p className="lead text-black">{text.contactMessage}</p>
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="10"
                      placeholder={text.placeholderMessage}
                      name="message"
                    ></textarea>
                  </div>
                </div>
              </div>
			  <ReCAPTCHA
			      className= "captcha"
				  ref={recaptchaRef}
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  theme="light"
                  onChange={onChange}
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
