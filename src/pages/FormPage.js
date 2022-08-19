import Logo from "../images/Logo.png";
import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import './FormLayout.css';
import useInput from "../hooks/use-input";



const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
//control shift f to format code
//https://www.youtube.com/watch?v=NgWGllOjkbs
function FormPage() {
  const [dates, setdates] = useState([]);
  
const addDate = (date) => {
  setdates([...dates, date]);
  console.log(dates);
}
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
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
    value: languageValue,
    isValid: languageIsValid,
    hasError: languageHasError,
    valueChangeHandler: languageChangeHandler,
    inputBlurHandler: languageBlurHandler,
    reset: resetLanguage
  } = useInput(isNotEmpty);
  const {
    value: levelValue,
    isValid: levelIsValid,
    hasError: levelHasError,
    valueChangeHandler: levelChangeHandler,
    inputBlurHandler: levelBlurHandler,
    reset: resetLevel
  } = useInput(isNotEmpty);
  const {
    value: objectiveValue,
    isValid: objectiveIsValid,
    hasError: objectiveHasError,
    valueChangeHandler: objectiveChangeHandler,
    inputBlurHandler: objectiveBlurHandler,
    reset: resetObjective
  } = useInput(isNotEmpty);

  const {
    value: examValue,
    isValid: examIsValid,
    hasError: examHasError,
    valueChangeHandler: examChangeHandler,
    inputBlurHandler: examBlurHandler,
    reset: resetExam
  } = useInput(isNotEmpty);
  const {
    value: dayValue,
    isValid: dayIsValid,
    hasError: dayHasError,
    valueChangeHandler: dayChangeHandler,
    inputBlurHandler: dayBlurHandler,
    reset: resetDay
  } = useInput(isNotEmpty);
  const {
    value: timeValue,
    isValid: timeIsValid,
    hasError: timeHasError,
    valueChangeHandler: timeChangeHandler,
    inputBlurHandler: timeBlurHandler,
    reset: resetTime
  } = useInput(isNotEmpty);

  

  let formIsValid = false;

  if (firstNameIsValid 
    && lastNameIsValid 
    && emailIsValid 
    && languageIsValid 
    && levelIsValid 
    && objectiveIsValid
    && examIsValid
    && dayIsValid
    && timeIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(firstNameValue,
      lastNameValue, 
      emailValue, 
      languageValue ,
      levelValue ,
      objectiveValue, 
      examValue, 
      dayValue,
      timeValue);

    resetFirstName();
    resetLastName();
    resetEmail();
    resetLanguage();
    resetLevel();
    resetObjective();
    resetExam();
    resetDay();
    resetTime();
  };

  const firstNameClasses =  firstNameHasError ? 'form-group mt-3 invalid' : 'form-group mt-3';
  const lastNameClasses =  lastNameHasError ? 'form-group mt-3 invalid' : 'form-group mt-3';
  const emailClasses = emailHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const languageClasses = languageHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const levelClasses = levelHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const objectiveClasses = objectiveHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const examClasses = examHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const dayClasses = dayHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
  const timeClasses = timeHasError ? 'form-group mt-1 invalid' : 'form-group mt-1';
 

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

                                        {/* first name */}
        <div className="row">
            <div className="col">
          <div className={firstNameClasses}>
            <label className="lead text-black"></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter first name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
           {firstNameHasError && <p className="error-text">Please enter a first name.</p>}
          </div>
          </div>
                                        {/* last name */}

          <div className="col">
          <div className={lastNameClasses}>
            <label className="lead text-black"></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter last name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
           {lastNameHasError && <p className="error-text">Please enter a last name.</p>}
          </div>
          </div>
          </div>
                                        {/* email */} 

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

                                        {/* language */} 
        <div className="row">
        <div className="col">
        <div className={languageClasses}>
        <label className="lead text-black"></label>
         <select 
            type= "text"
            className="form-control mt-1" 
            value={languageValue}
            onChange={languageChangeHandler}
            onBlur={languageBlurHandler}>
            <option value="">Select a language</option>
            <option value = "English">English</option>
            <option value = "Spanish" >Spanish for foreigners</option>
            <option value = "French">French</option>
            <option value = "German">German</option>
            <option value = "Portuguese">Portuguese</option>
            <option value = "Italian">Italian</option>
            <option value = "Chinese">Chinese</option>
        </select>
        {languageHasError && <p className="error-text">Please select a language</p>}
        </div>
        </div>

                                          {/* level */} 
        <div className="col">
        <div className= {levelClasses}>
        <label></label>
         <select 
            type= "text"
            className="form-control mt-1"
            value={levelValue}
            onChange={levelChangeHandler}
            onBlur={levelBlurHandler}>
            <option value="">Select your level</option>
            <option value="Beginner">Beginner</option>
            <option value="Pre-intermediate">Pre-intermediate</option>
            <option value = "Intermediate">Intermediate</option>
            <option value = "Upper-Intermediate">Upper-intermediate</option>
            <option value = "Advanced">Advanced</option>
        </select>
        {levelHasError && <p className="error-text">Please select your level</p>}
        </div>
        </div>
        </div>

                                        {/* objective */}  
        <div className={objectiveClasses}>
        <label></label>
         <select 
            type= "text"
            className="form-control mt-1"
            value={objectiveValue}
            onChange={objectiveChangeHandler}
            onBlur={objectiveBlurHandler}>
            <option value="">What is your objective?</option>
            <option value = "Exam">Pass an exam</option>
            <option value = "Conversation" >Conversation</option>
            <option value = "Business">Business</option>
        </select>
        {objectiveHasError && <p className="error-text">Please select your objective</p>}
        </div>
        

                                        {/* exam */}  
        <div  className={examClasses}>
        <label></label>
         <select 
            type= "text"
            className="form-control mt-1"
            value={examValue}
            onChange={examChangeHandler}
            onBlur={examBlurHandler}>
            <option value="">Select the exam</option>
            <option value = "1">option 1</option>
            <option value = "2" >option 2</option>
            <option value = "3">option 3</option>
        </select>
        {examHasError && <p className="error-text">Please select the exam</p>}
        </div>
 

 
                                        {/* time day */} 
        
        <div className = "row">
        <div className = "col">
        <div  className={dayClasses}>
        <label></label>
         <select 
            type= "text"
            className="form-control mt-1"
            value={dayValue}
            onChange={dayChangeHandler}
            onBlur={dayBlurHandler}>
            <option value="">Day</option>
            <option value = "Monday">Monday</option>
            <option value = "Tuesday">Tuesday</option>
            <option value = "Wednesday">Wednesday</option>
            <option value = "Thursday">Thursday</option>
            <option value = "Friday">Friday</option>
            <option value = "Saturday">Saturday</option>
            <option value = "Sunday">Sunday</option>
        </select>
        {dayHasError && <p className="error-text">Please select the day</p>}
        </div>
        </div>

                                        {/* time time */}           
        <div className = "col">  
        <div  className={timeClasses}>
        <label></label> 
        <select 
            type= "text"
            className="form-control mt-1"
            value={timeValue}
            onChange={timeChangeHandler}
            onBlur={timeBlurHandler}>
            <option value="">Time</option>
            <option value = "08:00">08:00</option>
            <option value = "08:30">08:30</option>
            <option value = "09:00">09:00</option>
            <option value = "09:30">09:30</option>
            <option value = "10:00">10:00</option>
            <option value = "10:30">10:30</option>
            <option value = "11:00">11:00</option>
            <option value = "11:30">11:30</option>
            <option value = "12:00">12:00</option>
            <option value = "12:30">12:30</option>
            <option value = "13:00">13:00</option>
            <option value = "13:30">13:30</option>
            <option value = "14:00">14:00</option>
            <option value = "14:30">14:30</option>
            <option value = "15:00">15:00</option>
            <option value = "15:30">15:30</option>
            <option value = "16:00">16:00</option>
            <option value = "16:30">16:30</option>
            <option value = "17:00">17:00</option>
            <option value = "17:30">17:30</option>
            <option value = "18:00">18:00</option> 
        </select>
        {timeHasError && <p className="error-text">Please select the time</p>}
        </div>
        </div>
        </div>
        <button onClick={addDate} >
          Add another moment
        </button>

                                         {/* submit */} 

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
