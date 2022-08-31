import Logo from "../images/Logo.png";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import "./FormLayout.css";
import useInput from "../hooks/use-input";
import {
  listWorkingHours,
  calculateHourDifference,
  listWorkingDays,
  listMatrix,
  listWorkingHoursMatrix,
  convertToArgentineTime,
} from "../utils/time";
import TimezoneSelect from "react-timezone-select";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
//control shift f to format code
//https://www.youtube.com/watch?v=NgWGllOjkbs
function FormPage() {
  const [dates, setDates] = useState([]);
  const [difference, setDifference] = useState(0);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [freeDate, setFreeDate] = useState(true);


  console.log (dates)

  function resetDates() {
    setDates([]);
  }

  function timezoneChangeHandler(timezone) {
    setSelectedTimezone(timezone);
    resetTime();
    resetDay();
    resetDates();
    let difference = calculateHourDifference(timezone.offset);
    setDifference(difference);
  }

  // console.log(selectedTimezone);

  let workinghours = listWorkingHours(difference);

  let workingdays = listWorkingDays(
    workinghours.nextDay,
    workinghours.previousDay
  );

  function convertToReadableTime (hour, minute) {
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    return hour + ":" + minute;
  }

  let matrix = listMatrix(
    workingdays,
    workinghours.workingHours,
    workinghours.nextDay,
    workinghours.previousDay
  );

  function validateFreeDate (day, hour, minute) {
    let retorno = true
      setFreeDate(true)
      dates.forEach(function(item) { 
        if ( item.day === day && item.hour === hour && item.minute === minute) {
          setFreeDate(false);
          retorno = false
        } 
      })
      return retorno
  }

  //let argentineTime = convertToArgentineTime("dayValue", 18, 0, selectedTimezone.offset);
  //console.log(argentineTime);

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: languageValue,
    isValid: languageIsValid,
    hasError: languageHasError,
    valueChangeHandler: languageChangeHandler,
    inputBlurHandler: languageBlurHandler,
    reset: resetLanguage,
  } = useInput(isNotEmpty);
  const {
    value: levelValue,
    isValid: levelIsValid,
    hasError: levelHasError,
    valueChangeHandler: levelChangeHandler,
    inputBlurHandler: levelBlurHandler,
    reset: resetLevel,
  } = useInput(isNotEmpty);
  const {
    value: objectiveValue,
    isValid: objectiveIsValid,
    hasError: objectiveHasError,
    valueChangeHandler: objectiveChangeHandler,
    inputBlurHandler: objectiveBlurHandler,
    reset: resetObjective,
  } = useInput(isNotEmpty);

  const {
    value: examValue,
    isValid: examIsValid,
    hasError: examHasError,
    valueChangeHandler: examChangeHandler,
    inputBlurHandler: examBlurHandler,
    reset: resetExam,
  } = useInput(isNotEmpty);
  const {
    value: dayValue,
    isValid: dayIsValid,
    hasError: dayHasError,
    valueChangeHandler: dayChangeHandler,
    inputBlurHandler: dayBlurHandler,
    reset: resetDay,
  } = useInput(isNotEmpty);
  const {
    value: timeValue,
    isValid: timeIsValid,
    hasError: timeHasError,
    valueChangeHandler: timeChangeHandler,
    inputBlurHandler: timeBlurHandler,
    reset: resetTime,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  const examisValidWhenObjectiveIsExam = function () {
    if (objectiveValue === "Exam") {
      return examIsValid;
    } else {
      return true;
    }
  };

  const addDate = () => {
    if (dayIsValid && timeIsValid) {
      let day = dayValue;
      let hour = timeValue.split(":")[0];
      let minute = timeValue.split(":")[1];
      let valid = validateFreeDate(day, hour, minute); 

      if (valid) {
        setDates([...dates, { day, hour, minute }]);
        resetDay();
        resetTime();
      }   
    }
  };

  let listWorkingHoursM = workinghours.workingHours;

  if (dayValue && dayIsValid) {
    listWorkingHoursM = listWorkingHoursMatrix(
      dayValue,
      matrix,
      workingdays
    );
  }

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    languageIsValid &&
    levelIsValid &&
    objectiveIsValid &&
    examisValidWhenObjectiveIsExam() &&
    dayIsValid &&
    timeIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");

    const examWhenObjectiveIsExam = function () {
      if (objectiveValue === "Exam") {
        return examValue;
      } else {
        return "";
      }
    };

    let newStudent = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      language: languageValue,
      level: levelValue,
      objective: objectiveValue,
      exam: examWhenObjectiveIsExam(),
      day: dayValue,
      time: timeValue,
    };
    console.log(newStudent);

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

  const firstNameClasses = firstNameHasError
    ? "form-group mt-3 invalid"
    : "form-group mt-3";
  const lastNameClasses = lastNameHasError
    ? "form-group mt-3 invalid"
    : "form-group mt-3";
  const emailClasses = emailHasError
    ? "form-group mt-1 invalid"
    : "form-group mt-1";
  const languageClasses = languageHasError
    ? "form-group mt-1 invalid"
    : "form-group mt-1";
  const levelClasses = levelHasError
    ? "form-group mt-1 invalid"
    : "form-group mt-1";
  const objectiveClasses = objectiveHasError
    ? "form-group mt-1 invalid"
    : "form-group mt-1";
  const examClasses = examHasError
    ? "form-group mt-1 invalid"
    : "form-group mt-1";
  const dayClasses = dayHasError
    ? "form-group mt-1 invalid"
    : "form-group mt-1";
  const timeClasses = timeHasError
    ? "form-group mt-1 invalid"
    : "form-group mt-1";

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
          <h3 className="Auth-form-title display-6 text-center">
            Search Groups
          </h3>

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
                {firstNameHasError && (
                  <p className="error-text">Please enter a first name.</p>
                )}
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
                {lastNameHasError && (
                  <p className="error-text">Please enter a last name.</p>
                )}
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
            {emailHasError && (
              <p className="error-text">Please enter a valid email.</p>
            )}
          </div>

          {/* language */}
          <div className="row">
            <div className="col">
              <div className={languageClasses}>
                <label className="lead text-black"></label>
                <select
                  type="text"
                  className="form-control mt-1"
                  value={languageValue}
                  onChange={languageChangeHandler}
                  onBlur={languageBlurHandler}
                >
                  <option value="">Select a language</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish for foreigners</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="Italian">Italian</option>
                  <option value="Rusian">Rusian</option>
                </select>
                {languageHasError && (
                  <p className="error-text">Please select a language</p>
                )}
              </div>
            </div>

            {/* level */}
            <div className="col">
              <div className={levelClasses}>
                <label></label>
                <select
                  type="text"
                  className="form-control mt-1"
                  value={levelValue}
                  onChange={levelChangeHandler}
                  onBlur={levelBlurHandler}
                >
                  <option value="">Select your level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Pre-intermediate">Pre-intermediate</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Upper-Intermediate">Upper-intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                {levelHasError && (
                  <p className="error-text">Please select your level</p>
                )}
              </div>
            </div>
          </div>

          {/* objective */}

          <div className={objectiveClasses}>
            <label></label>
            <select
              type="text"
              className="form-control mt-1"
              value={objectiveValue}
              onChange={objectiveChangeHandler}
              onBlur={objectiveBlurHandler}
            >
              <option value="">What is your objective?</option>
              <option value="Exam">Pass an exam</option>
              <option value="Conversation">Conversation</option>
              <option value="Business">Business</option>
            </select>
            {objectiveHasError && (
              <p className="error-text">Please select your objective</p>
            )}
          </div>

          {/* exam */}

          <div className = "row">
          <div className={examClasses}>
            <label></label>
            <select
              type="text"
              className="form-control mt-1"
              hidden={objectiveValue !== "Exam"}
              value={examValue}
              onChange={examChangeHandler}
              onBlur={examBlurHandler}
            >
              <option value="">Select the exam</option>
              <option value="KET">KET</option>
              <option value="PET">PET</option>
              <option value="FCE">FCE</option>
              <option value="CAE">CAE</option>
              <option value="CPE">CPE</option>
              <option value="IELTS">IELTS</option>
              <option value="TOEFL">TOEFL</option>
              <option value="other">Other (please specify)</option>
            </select>
            {examHasError && objectiveValue === "Exam" && (
              <p className="error-text">Please select the exam</p>
            )}
          </div>
          </div>      

          <div className={firstNameClasses}>
                <label className="lead text-black"></label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="What is the name of the exam?"
                  hidden={examValue !== "other"}
                  value={firstNameValue}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                />
                {firstNameHasError && (
                  <p className="error-text">Please enter a name of an exam.</p>
                )}
              </div>

          <h3 className="Auth-form-title display-6 text-center">
            Select free moments
          </h3>
          {dates.map((date) => (
            <div>
              {date.day} - {convertToReadableTime(date.hour,date.minute)}
            </div>
          ))}


          {/* timeZone */}

          <div>
            <TimezoneSelect
              value={selectedTimezone}
              onChange={timezoneChangeHandler}
            />
          </div>

          {/* time day */}

          

          <div className="row">
            <div className="col">
              <div className={dayClasses}>
                <label></label>
                <select
                  type="text"
                  className="form-control mt-1"
                  hidden={selectedTimezone === ""}
                  value={dayValue}
                  onChange={dayChangeHandler}
                  onBlur={dayBlurHandler}
                >
                  <option value="">Select the day</option>
                  {workingdays.map((day) => (
                    <option value={day}>{day}</option>
                  ))}
                </select>
                {dayHasError && (
                  <p className="error-text">Please select the day</p>
                )}
              </div>
            </div>

            {/* time time */}

            <div className="col">
              <div className={timeClasses}>
                <label></label>
                <select
                  type="text"
                  className="form-control mt-1"
                  hidden={selectedTimezone === ""}
                  value={timeValue}
                  onChange={timeChangeHandler}
                  onBlur={timeBlurHandler}
                >
                  <option value="">Time</option>
                  {listWorkingHoursM.map((time) => (
                        
                    <option value={time.timeConcatenated} >{convertToReadableTime(time.hour,time.minute)}</option>
        
                  ))}
                </select>
                {timeHasError && (
                  <p className="error-text">Please select the time</p>
                )}
              </div>
              
            </div>
          </div>
          {!freeDate && (
                <p className="error-text">Please select a valid time</p>)}
          <button onClick={addDate}>Add another time</button>

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
