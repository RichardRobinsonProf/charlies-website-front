import Logo from "../images/Logo.png";
import { Image, Button } from "react-bootstrap";
import './FormLayout.css';
import useInput from "../hooks/use-input";
import TimePicker from 'react-bootstrap-time-picker';


const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
//control shift f to format code
//https://www.youtube.com/watch?v=NgWGllOjkbs
function FormPage() {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } =useInput(isEmail);
  const {
    value: nativeLanguageValue,
    isValid: nativeLanguageIsValid,
    hasError: nativeLanguageHasError,
    valueChangeHandler: nativeLanguageChangeHandler,
    inputBlurHandler: nativeLanguageBlurHandler,
    reset: resetnativeLanguage
  } =useInput(isNotEmpty);
  const {
    value: countryValue,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetcountry
  } =useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && nativeLanguageIsValid && countryIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(nameValue, emailValue, nativeLanguageValue, countryValue);

    resetName();
    resetEmail();
    resetnativeLanguage();
    resetcountry();
  };

  const nameClasses =  nameHasError ? 'form-group mt-3 invalid' : 'form-group mt-3';
  const emailClasses = emailHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const nativeLanguageClasses = nativeLanguageHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const countryClasses = countryHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';

  return (
    <div className="Auth-form-container bg-light">
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content text-center">
          <Image
            className="img-fluid"
            src={Logo}
            height="100"
            width="100"
          ></Image>
          <h3 className="Auth-form-title display-6 text-center">Search Groups</h3>

        
        <div className="row">
            <div className="col">
          <div className={nameClasses}>
            <label className="lead text-black"></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter first name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
           {nameHasError && <p className="error-text">Please enter a first name.</p>}
          </div>
          </div>

          <div className="col">
          <div className={nameClasses}>
            <label className="lead text-black"></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter last name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
           {nameHasError && <p className="error-text">Please enter a last name.</p>}
          </div>
          </div>
          </div>

          <div className={emailClasses}>
            <label className="lead text-black"></label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
          {emailHasError && <p className="error-text">Please enter a valid email.</p>}
          </div>

      
        <div className="row">
        <div className="col">
        <div className="form-group">
        <label htmlFor="exampleFormControlSelect1"></label>
         <select className="form-control" id="exampleFormControlSelect1">
            <option value="">Select a language</option>
            <option value = "English">English</option>
            <option value = "Spanish for foreigners" >Spanish for foreigners</option>
            <option value = "French">French</option>
            <option value = "German">German</option>
            <option value = "Portuguese">Portuguese</option>
            <option value = "Italian">Italian</option>
            <option value = "Chinese">Chinese</option>

        </select>
        </div>
        </div>

        <div className="col">
        <div className="form-group">
        <label htmlFor="exampleFormControlSelect1"></label>
         <select className="form-control" id="exampleFormControlSelect1">
            <option value="">Select your level</option>
            <option value="Beginner">Beginner</option>
            <option value="Pre-intermediate">Pre-intermediate</option>
            <option value = "Intermediate">Intermediate</option>
            <option>Upper-intermediate</option>
            <option>Advanced</option>
        </select>
        </div>
        </div>
        </div>

        <div className="form-group">
        <label htmlFor="exampleFormControlSelect1"></label>
         <select className="form-control" id="exampleFormControlSelect1">
            <option value="">What is your objective?</option>
            <option value = "Exam">Pass an exam</option>
            <option value = "Conversation" >Conversation</option>
            <option value = "Business">Business</option>
        </select>
        </div>
        
        <div  className="form-group">
        <label htmlFor="exampleFormControlSelect1"></label>
         <select className="form-control" id="exampleFormControlSelect1">
            <option value="">Select the exam</option>
            <option value = "1">option 1</option>
            <option value = "2" >option 2</option>
            <option value = "3">option 3</option>
        </select>
        </div>
 

 


        <div className = "row">
        <div className = "col">
        <div  className="form-group">
        <label htmlFor="exampleFormControlSelect1"></label>
         <select className="form-control" id="exampleFormControlSelect1">
            <option value="">Day</option>
            <option value = "1">Monday</option>
            <option value = "2">Tuesday</option>
            <option value = "3">Wednesday</option>
            <option value = "4">Thursday</option>
            <option value = "5">Friday</option>
            <option value = "6">Saturday</option>
            <option value = "7">Sunday</option>
        </select>
        </div>
        </div>

        <div className = "col">  
        <div  className="form-group">
        <label htmlFor="exampleFormControlSelect1"></label> 
        <TimePicker start="10:00" end="21:00" step={30} />
        </div>
        </div>
        </div>
        <Button className =  "btn btn-secundary">
            Add another moment
        </Button>



          <div className="d-grid gap-2 mt-5">
            <button type="submit" className="btn btn-primary btn-lg">
              <span className="text-white">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
