import Logo from "../images/Logo.png";
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
  convertDayToEnglish,
  convertDayToSpanish
} from "../utils/time";
import TimezoneSelect from "react-timezone-select";
import apiConnection from '../api/apiConnection'
import {useContext,useState, useEffect} from 'react'
import ContextChosenLanguage from '../Context'
import {chosenLanguage} from '../utils/language'
import {IoIosAdd} from 'react-icons/io'
import {GrFormTrash} from 'react-icons/gr'
import {BsTrash} from 'react-icons/bs'
import {Row,Col} from 'react-bootstrap'


const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
//control shift f to format code
//https://www.youtube.com/watch?v=NgWGllOjkbs
function FormPage() {
  const [dates, setDates] = useState([]);
  const [difference, setDifference] = useState(0);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [freeDate, setFreeDate] = useState(true);
  const [argentineDates, setArgentineDates] = useState([]);
  const [showErrorTimeZone, setShowErrorTimeZone] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [ShowErrorDayorTime, setShowErrorDayorTime] = useState(false);
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

  function resetDates() {
    setDates([]);
  }

  function deleteDate (index) {
    const newDates = dates.filter((date, i) => i !== index);
    setDates(newDates);
  }

  function resetTimeZone() {
    setSelectedTimezone("");
  }




  function timezoneChangeHandler(timezone) {
    setShowErrorTimeZone(false);
    setShowErrorDayorTime(false);
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
    workinghours.previousDay,
    ctx.language
  );

  function convertToReadableTime(hour, minute) {
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

  function validateFreeDate(day, hour, minute) {
    let retorno = true;
    setFreeDate(true);
    dates.forEach(function (item) {
      if (item.day === day && item.hour === hour && item.minute === minute) {
        setFreeDate(false);
        retorno = false;
      }
    });
    return retorno;
  }

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
  const {
    value: otherExamValue,
    isValid: otherExamIsValid,
    hasError: otherExamHasError,
    valueChangeHandler: otherExamChangeHandler,
    inputBlurHandler: otherExamBlurHandler,
    reset: resetOtherExam,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  const examisValidWhenObjectiveIsExam = function () {
    if (objectiveValue === "Exam") {
      return examIsValid;
    } else {
      return true;
    }
  };

  const examIsValidWhenObjectiveIsExamOther = function () {
    if (objectiveValue === "Exam" && examValue === "Other") {
      return otherExamIsValid;
    } else {
      return true;
    }
  };

  const addDate = (event) => {
        event.preventDefault();

    if (selectedTimezone === "") {
      setShowErrorTimeZone(true)
    }


 
    if (dayIsValid && timeIsValid) {
      setShowErrorDayorTime(false)
      let day
      if(ctx.language !== 'Spanish') {
      day = dayValue}
      else {
      day = convertDayToEnglish(dayValue)
      }
      let hour = timeValue.split(":")[0];
      let minute = timeValue.split(":")[1];
      let valid = validateFreeDate(day, hour, minute);
      if (valid) {
        setDates([...dates, { day, hour, minute }]);
      }
    }else {
      setShowErrorDayorTime(true)
    }
  };
  const examWhenObjectiveIsExam = function () {
    if (objectiveValue === "Exam" && examValue !== "Other") {
      return examValue;
    } else if (objectiveValue === "Exam" && examValue === "Other") {
      return otherExamValue;
    } else {
      return "";
    }
  };
 /*  console.log("first name is valid: " + firstNameIsValid);
  console.log("last name is valid: " + lastNameIsValid);
  console.log("email is valid: " + emailIsValid);
  console.log("language is valid: " + languageIsValid);
  console.log("level is valid: " + levelIsValid);
  console.log("objective is valid: " + objectiveIsValid);
  console.log("exam is valid: " + examisValidWhenObjectiveIsExam());
  console.log("other exam is valid: " + examIsValidWhenObjectiveIsExamOther());
  console.log("day is valid: " + dayIsValid);
  console.log("time is valid: " + timeIsValid); */

  let listWorkingHoursM = workinghours.workingHours;

  useEffect(() => {
    let retorno = [];
    if (dates) {
      dates.forEach(function (item) {
        console.log(item);
        let hour = parseInt(item.hour);
        let minute = item.minute;
        let day = item.day;
        let argentineTime = convertToArgentineTime(
          day,
          hour,
          minute,
          difference
        );
        retorno.push(argentineTime);
      });
      setArgentineDates(retorno);
    }
  }, [dates, difference]);

  if (dayValue && dayIsValid) {
    listWorkingHoursM = listWorkingHoursMatrix(dayValue, matrix, workingdays);
  }
  
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    languageIsValid &&
    levelIsValid &&
    objectiveIsValid &&
    examisValidWhenObjectiveIsExam() &&
    examIsValidWhenObjectiveIsExamOther() &&
    dayIsValid &&
    timeIsValid &&
    dates.length > 0
  ) {
    formIsValid = true;
  }
  console.log(dates)

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setShowAlert(true);
      return;
    }
    if (dates.length < 3) {
      setShowWarning(true);
    }

    setShowAlert(false)
    console.log("Submitted!");

    let newStudent = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      language: languageValue,
      level: levelValue,
      objective: objectiveValue,
      exam: examWhenObjectiveIsExam(),
      localTime: dates,
      argentineTime: argentineDates,
      timeZone: selectedTimezone,
    };
    console.log(newStudent);
    apiConnection.post('/users', newStudent)
    .then(function(response) {
      alert("Welcome " + response.data.user);
    })
    .catch(function(error) {
      const errorMessage = error.response.data;
      alert(errorMessage)
    });

    resetFirstName();
    resetLastName();
    resetEmail();
    resetLanguage();
    resetLevel();
    resetObjective();
    resetExam();
    resetDay();
    resetTime();
    resetOtherExam();
    resetDates();
    resetTimeZone();
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
  const otherExamClasses = otherExamHasError
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
            {text.formtitle}
          </h3>

          {/* first name */}
          <div className="row">
            <div className="col">
              <div className={firstNameClasses}>
                <label className="lead text-black"></label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder= {text.placeholderFirstName}
                  value={firstNameValue}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                />
                {firstNameHasError && (
                  <p className="error-text">{text.errorFirstName}</p>
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
                  placeholder={text.placeholderLastName}
                  value={lastNameValue}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                />
                {lastNameHasError && (
                  <p className="error-text">{text.errorLastName}</p>
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
              placeholder={text.placeholderEmail}
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="error-text">{text.errorEmail}</p>
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
                  <option key = "Select a language" value="">{text.placeholderSelectLanguage}</option>
                  <option value="English">{text.english}</option>
                  <option value="Spanish">{text.spanish}</option>
                  <option value="French">{text.french}</option>
                  <option value="German">{text.german}</option>
                  <option value="Portuguese">{text.portuguese}</option>
                  <option value="Italian">{text.italian}</option>
                  <option value="Rusian">{text.russian}</option>
                </select>
                {languageHasError && (
                  <p className="error-text">{text.errorLanguage}</p>
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
                  <option value="">{text.placeholderSelectLevel}</option>
                  <option value="Beginner">{text.beginner}</option>
                  <option value="Pre-intermediate">{text.preIntermediate}</option>
                  <option value="Intermediate">{text.intermediate}</option>
                  <option value="Upper-Intermediate">{text.upperIntermediate}</option>
                  <option value="Advanced">{text.advanced}</option>
                </select>
                {levelHasError && (
                  <p className="error-text">{text.errorLevel}</p>
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
              <option value="">{text.placeholderSelectObjective}</option>
              <option value="Exam">{text.exam}</option>
              <option value="Conversation">{text.conversation}</option>
              <option value="Business">{text.business}</option>
            </select>
            {objectiveHasError && (
              <p className="error-text">{text.errorObjective}</p>
            )}
          </div>

          {/* exam */}

          <div className="row">
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
                <option value="">{text.placeholderExam}</option>
                <option value="KET">KET</option>
                <option value="PET">PET</option>
                <option value="FCE">FCE</option>
                <option value="CAE">CAE</option>
                <option value="CPE">CPE</option>
                <option value="IELTS">IELTS</option>
                <option value="TOEFL">TOEFL</option>
                <option value="other">{text.examOtherPleaseSpecify}</option>
              </select>
              {examHasError && objectiveValue === "Exam" && (
                <p className="error-text">{text.errorExam}</p>
              )}
            </div>
          </div>

          <div className={otherExamClasses}>
            <label className="lead text-black"></label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="What is the name of the exam?"
              hidden={examValue !== "other"}
              value={otherExamValue}
              onChange={otherExamChangeHandler}
              onBlur={otherExamBlurHandler}
            />
            {otherExamHasError && examValue === "other" &&  (
              <p className="error-text">{text.errorSpecifyExam}</p>
            )}
          </div>

          <h3 className="Auth-form-title display-6 text-center">
            {text.placeholderPreferedSchedule}
          </h3>
          <div className= "divPreferredSchedule">
          {dates.length > 0 ? "": <p className="placeholdertext">{text.placeholderListPreferedSchedule}</p>}
          {dates.map((date, index) => (
            <div key = {index}>
              <Row>
                <Col className="padding-left-class">
              {ctx.language === "English" ? date.day : convertDayToSpanish(date.day)} - {convertToReadableTime(date.hour, date.minute)}
             </Col>
             <Col className="text-center">
             <BsTrash 
             
             onClick={() => deleteDate(index)} />
              </Col>
             </Row>
            </div>
          ))}
          </div>

          {/* timeZone */}

          <div>
            <TimezoneSelect
              placeholder= {text.placeholderTimeZone}
              value={selectedTimezone}
              onChange={timezoneChangeHandler}
            />
          </div>
          {showErrorTimeZone && ( <p className="error-text">{text.errorTimeZone}</p>)}


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
                  <option value="">{text.placeholderSelectDay}</option>
                  {workingdays.map((day,index) => (
                    <option key= {index} value={day}>{day}</option>
                  ))}
                </select>
                {dayHasError && (
                  <p className="error-text">{text.errorDay}</p>
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
                  <option value="">{text.placeholderPreferedSchedule}</option>
                  {listWorkingHoursM.map((time,index) => (
                    <option key= {index} value={time.timeConcatenated}>
                      {convertToReadableTime(time.hour, time.minute)}
                    </option>
                  ))}
                </select>
                {timeHasError && (
                  <p className="error-text">{text.errorTime}</p>
                )}
              </div>
            </div>
          </div>
          {!freeDate && (
            <p className="error-text">{text.errorInvalidTime}</p>
          )}
          {ShowErrorDayorTime && !showErrorTimeZone &&  ( <p className="error-text">{text.errorDayorTime}</p>)}
          <button type="button" className="btn btn-primary btn-lg" onClick={addDate}>
            {text.buttonAdd + " "} <IoIosAdd className="addButton"/>
          </button>
       

          {/* submit */}

          <div className="d-grid gap-2 mt-5">
            <button type="submit" className="btn btn-primary btn-lg buttonSend">
              <span className="text-white">{text.buttonSubmit}
              </span>
            </button>
            {showAlert && (
             
              <p className="error-text">{text.errorFormGeneral}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
