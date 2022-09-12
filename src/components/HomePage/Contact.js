import { Container } from "react-bootstrap";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  //https://www.google.com/recaptcha/admin/create

  const [captchaValido, setCaptcha] = useState(false);
  const recaptchaRef = useRef(null);

  const onChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      setCaptcha(true);
    }
  };

  return (
    <section id="contactus">
      <div className="text-center">
        <h1 className="display-6 text-center">Contact us</h1>

        <div className="align-items-center text-center bg-light container">
          <br></br>
          <Container>
            <form className="mb-4">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <p className="lead text-black">Name</p>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      name="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <p className="lead text-black">Email</p>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Telephone" className="form-label">
                      <p className="lead text-black">Telephone</p>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your telephone"
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      <p className="lead text-black">Message</p>
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="10"
                      placeholder="Enter your message"
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
                  Send Message
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
