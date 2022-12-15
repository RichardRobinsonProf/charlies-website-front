import "./FormLayout.css";
import useInput from "../../hooks/use-input";
import ReCAPTCHA from "react-google-recaptcha";
import {
  listWorkingHours,
  calculateHourDifference,
  listWorkingDays,
  listMatrix,
  listWorkingHoursMatrix,
  convertToArgentineTime,
  convertDayToEnglish,
  convertDayToSpanish
} from "../../utils/time";
import TimezoneSelect from "react-timezone-select";
import apiConnection from '../../api/apiConnection'
import {useContext,useState, useEffect, useRef, Fragment} from 'react'
import ContextChosenLanguage from '../../Context'
import {chosenLanguage} from '../../utils/language'
import {IoIosAdd} from 'react-icons/io'
import {BsTrash} from 'react-icons/bs'
import ModalForm from "../../components/FormPage/ModalForm";
import { Prompt } from "react-router-dom";
import { useHistory } from "react-router-dom";


const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
//control shift f to format code
//https://www.youtube.com/watch?v=NgWGllOjkbs
function Form() {
  const [dates, setDates] = useState([]);
  const [difference, setDifference] = useState(0);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [freeDate, setFreeDate] = useState(true);
  const [argentineDates, setArgentineDates] = useState([]);
  const [showErrorTimeZone, setShowErrorTimeZone] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [ShowErrorDayorTime, setShowErrorDayorTime] = useState(false);
  const ctx = useContext(ContextChosenLanguage)
  const [text, setText] = useState(chosenLanguage(ctx.language))
  const [captchaValido, setCaptcha] = useState(false);
  const recaptchaRef = useRef(null);
  const [showModalWarning, setShowModalWarning] = useState(false);
  const [showFormIsInvalid, setShowFormIsInvalid] = useState(false);

  const history = useHistory();
  const handleClose = () => {
    setShowModalWarning(false);
  }
 
  const [isEntered, setIsEntered] = useState(false);
  const handleCloseAlert = () => {
    setShowAlert(false);
    console.log(ctx.onPage)
    history.push('/')
  }


  
  
  useEffect (() => {
      console.log(ctx.language)
      if (ctx.language === 'English') {
        resetDates()
          setText(chosenLanguage('English'))     
      } else {
        resetDates()
          setText(chosenLanguage('Spanish'))
      }
      console.log(ctx)
     
  },[ctx])

  function resetDates() {
    setDates([]);
  }

  function whenObjectiveIsExamExamValidation () {
    if (objectiveValue === 'Exam' && examValue === '') {
      return false
    } else if (objectiveValue === 'Exam' && examValue !== '') {
      return true
    } else {
      return true
    }
  }
  function selectedObjectiveChangeHandler (event) {
    objectiveChangeHandler(event)
    resetExam()
  }
  function selectedLanguageChangeHandler (event) {
    languageChangeHandler(event)
    resetExam()
  }

  function deleteDate (index) {
    const newDates = dates.filter((date, i) => i !== index);
    setDates(newDates);
  }

  function resetTimeZone() {
    setSelectedTimezone("");
  }

  function validatePhoneNumber(value) {
    if (value.length < 8 || value.length > 15) {
      return false;
    }
    else {
      return true;
    }

  }

  const onChangeCaptcha = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      setCaptcha(true);
    }
  };

  function createUserAndSend () {
    setShowModalWarning(false)
    let newStudent = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      language: languageValue,
      telephone: telephoneValue,
      level: levelValue,
      objective: objectiveValue,
      exam: examValue,
      localTime: dates,
      argentineTime: argentineDates,
      timeZone: selectedTimezone,
      wantsGroup: ctx.wantsGroup,
      pricePack: ctx.pricePack,
      price: ctx.price,
      amountMonths: ctx.duration,
    };
    console.log(newStudent);

    if(ctx.wantsGroup === true) {
    apiConnection.post('/users', newStudent)
    .then(function(response) {
      setShowAlert(true)
      setIsEntered(false)
    })
    .catch(function(error) {
      const errorMessage = error.response.data;
      alert(errorMessage);
    });
  } else {
    apiConnection.post('/users/individual', newStudent)
    .then(function(response) {
      setShowAlert(true)
      setIsEntered(false)
    })
    .catch(function(error) {
      const errorMessage = error.response.data;
      alert(errorMessage);
    });
  }

    resetFirstName();
    resetLastName();
    resetEmail();
    resetLanguage();
    resetLevel();
    resetObjective();
    resetExam();
    resetDay();
    resetTime();
    resetDates();
    resetTimeZone();
    resetTelephone();
    recaptchaRef.current.reset();
    console.log("Submitted!");
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
    value: telephoneValue,
    isValid: telephoneIsValid,
    hasError: telephoneHasError,
    valueChangeHandler: telephoneChangeHandler,
    inputBlurHandler: telephoneBlurHandler,
    reset: resetTelephone,
  } = useInput(validatePhoneNumber);

  let formIsValid = false;

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

  useEffect(() => {
    ctx.setOnPage(true);
    return () => {
     
      ctx.setOnPage(false);
    }
  }, [])


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
    whenObjectiveIsExamExamValidation() &&
    dayIsValid &&
    timeIsValid &&
    telephoneIsValid &&
    captchaValido &&
    dates.length > 0
  ) {
    formIsValid = true;
  }
  console.log(dates)

  const submitHandler = (event) => {
        event.preventDefault();

    if (!formIsValid) {
      setShowFormIsInvalid(true);
      return;
    }else {
      setShowFormIsInvalid(false)
    }
    if (dates.length < 3) {
     setShowModalWarning(true)
    }else{
      createUserAndSend()                
        }   
  };

  function onFocusHandler () {
    if(ctx.onPage){
      setIsEntered(true);
    }
  
  }


  const firstNameClasses = firstNameHasError
    ? "form-group invalid"
    : "form-group";
  const lastNameClasses = lastNameHasError
    ? "form-group invalid"
    : "form-group ";
  const emailClasses = emailHasError
    ? "form-group  invalid"
    : "form-group ";
  const languageClasses = languageHasError
    ? "form-group  invalid"
    : "form-group ";
  const levelClasses = levelHasError
    ? "form-group  invalid"
    : "form-group ";
  const objectiveClasses = objectiveHasError
    ? "form-group  invalid"
    : "form-group ";
  const examClasses = examHasError
    ? "form-group  invalid"
    : "form-group ";
  const dayClasses = dayHasError
    ? "form-group  invalid"
    : "form-group ";
  const timeClasses = timeHasError
    ? "form-group  invalid"
    : "form-group ";
  const telephoneClasses = telephoneHasError
    ? "form-group  invalid"
    : "form-group ";

  return (
    <Fragment>
   {/*  <Prompt when={isEntered} message={text.formAreSureYouWantToLeave} /> */}
    <div id="FormPage" className="text-font">
      <form  onFocus={onFocusHandler}  className="Auth-form mt-5 " onSubmit={submitHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title text-white display-6 text-center ms-md-2">
            {ctx.wantsGroup === true ? text.formtitle : text.formtitleIndividual}
          </h3>
          <ModalForm
              show= {showAlert}
              handleClose= {handleCloseAlert}
              title= {text.modalSuccess}
              body = {text.modalSuccessForm}
              positive= {text.buttonClose}
              negative= "none"
              handlePositive= {handleCloseAlert}
              />

          <ModalForm
            show={showModalWarning}
            handleClose = {handleClose}
            title = {text.modalWarningTitle}
            body = {`${ctx.wantsGroup ? text.modalWarningGroup : text.modalWarningIndividual}`}
            negative= {text.modalWarningButton}
            positive= {text.modalWarningButtonCancel}
            handleNegative = {createUserAndSend}
            handlePositive = {handleClose}
            
          />

          {/* first name */}

       
             <div className="row justify-content-center"> 
             <div className="col-12 col-md-4">
              <div className={firstNameClasses}>
                <label className="lead text-black"></label>
                <input
                  type="text"
                  className="form-control   bg-white border-top-0 border-end-0 border-start-0  "
                  placeholder= {text.placeholderFirstName}
                  value={firstNameValue}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                />
                {firstNameHasError && (
                  <p className="error-text">{text.errorFirstName}</p>
                )}
              </div>
          
            {/* last name */}

          
              <div className={lastNameClasses}>
                <label className="lead text-black"></label>
                <input
                  type="text"
                  className="form-control   bg-white border-top-0 border-end-0 border-start-0 "
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

          {/* email */}


            <div className="col-12 col-md-4">
          <div className={emailClasses}>
            <label className="lead text-black"></label>
            <input
              type="email"
              className="form-control   bg-white border-top-0 border-end-0 border-start-0  "
              placeholder={text.placeholderEmail}
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="error-text">{text.errorEmail}</p>
            )}
          </div>

          <div className= {telephoneClasses}>
            <label className="lead text-black"></label>
            <input
              className="form-control   bg-white border-top-0 border-end-0 border-start-0 "
              placeholder={text.placeholderTelephone}
              value={telephoneValue}
              onChange={telephoneChangeHandler}
              onBlur={telephoneBlurHandler}
            />
            </div>
            <div>
            {telephoneHasError && (<p className="error-text">{text.errorTelephoneLenght}</p>)}
          </div>
         </div>
          </div>
          {/* language */}
     
          <div className="row justify-content-center"> 
          <div className="col-12 col-md-4">
              <div className={languageClasses}>
                <label className="lead text-black"></label>
                <select
                  type="text"
                  className="form-control   bg-white  text-muted border-top-0 border-end-0 border-start-0"
                  value={languageValue}
                  onChange={selectedLanguageChangeHandler}
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
         

            {/* level */}
         
              <div className={levelClasses}>
                <label></label>
                <select
                  type="text"
                  className="form-control   bg-white  text-muted  border-top-0 border-end-0 border-start-0"
                  value={levelValue}
                  onChange={levelChangeHandler}
                  onBlur={levelBlurHandler}
                >
                  <option value="">{text.placeholderSelectLevel}</option>
                  <option value="Beginner">{text.beginner}</option>
                  <option value="Pre-Intermediate">{text.preIntermediate}</option>
                  <option value="Intermediate">{text.intermediate}</option>
                  <option value="Upper-Intermediate">{text.upperIntermediate}</option>
                  <option value="Advanced">{text.advanced}</option>
                </select>
                {levelHasError && (
                  <p className="error-text">{text.errorLevel}</p>
                )}
              </div>
         </div>

          {/* objective */}
        <div className=" col-12 col-md-4">
          <div className={objectiveClasses}>
            <label></label>
            <select
              type="text"
              className="form-control   bg-white  text-muted border-top-0 border-end-0 border-start-0"
              value={objectiveValue}
              onChange={selectedObjectiveChangeHandler}
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

       
            <div className={examClasses}>
              <label></label>
              {objectiveValue === "Exam" && languageValue === "English" && (
                <select
                type="text"
                className="form-control  bg-white  text-muted border-top-0 border-end-0 border-start-0"
                //hidden={objectiveValue !== "Exam" || languageValue !== "English"}
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
              </select>
              )}
              {objectiveValue === "Exam" && languageValue !== "English" && (
                <input
                type="text"
                className="form-control   bg-white border-top-0 border-end-0 border-start-0"
                placeholder={text.placeholderExamSpecific}
                //hidden={objectiveValue !== "Exam" || languageValue === "English"} 
                value={examValue}
                onChange={examChangeHandler}
                onBlur={examBlurHandler}
              />
              )}
              {examHasError && objectiveValue === "Exam" && languageValue !== "English" && (
                <p className="error-text">{text.errorSpecifyExam}</p>  
              )}
              {examHasError && objectiveValue === "Exam" && languageValue === "English" && (
                <p className="error-text">{text.errorExam}</p>
              )}
            </div>
            </div>
        </div>

           

          <h3 className="Auth-form-title text-white  display-6 text-center">
            {text.placeholderPreferedSchedule}
          </h3>

          <div className = "row justify-content-center">
        
        <div className="col-12 col-md-4">
          <div className= "w-100 bg-darkgrey mt-4 rounded p-3">
          {dates.length > 0 ? "": <p className="placeholdertext">{text.placeholderListPreferedSchedule}</p>}
          {dates.map((date, index) => (
            <div key = {index}>
                <div className="row offset-md-2 offset-1">
                    <div className="col-6 text-white opacity-50">
              {ctx.language === "English" ? date.day : convertDayToSpanish(date.day)} - {convertToReadableTime(date.hour, date.minute)}
                </div>
                <div className="col-6">
             <BsTrash              
             onClick={() => deleteDate(index)}
             className="text-white opacity-50"
             />
             </div>
             </div>
            </div>
          ))}
          </div>
          </div>

          {/* timeZone */}

            <div className="col-12 col-md-4">
          <div>
            <TimezoneSelect
              className="text-start text-black text-muted mt-5 mt-md-4 "
              placeholder= {text.placeholderTimeZone}
              value={selectedTimezone}
              onChange={timezoneChangeHandler}
            />
          </div>
          {showErrorTimeZone && ( <p className="error-text">{text.errorTimeZone}</p>)}


          {/* time day */}

      
          
              <div className={dayClasses}>
                <label></label>
                <select
                  type="text"
                  className="form-control mt-md-2  bg-white text-white text-muted border-top-0 border-end-0 border-start-0"
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

            {/* time time */}

         
              <div className={timeClasses}>
                <label></label>
                <select
                  type="text"
                  className="form-control bg-white text-white text-muted border-top-0 border-end-0 border-start-0"
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
         
      
          {!freeDate && (
            <p className="error-text">{text.errorInvalidTime}</p>
          )}
          {ShowErrorDayorTime && !showErrorTimeZone &&  ( <p className="error-text">{text.errorDayorTime}</p>)}
          <div className="row">
          <button type="button" className="bg-blue ms-auto w-25 me-3 mb-3" onClick={addDate}>
            {} <IoIosAdd className="addButton"/>
          </button>
          </div>
          <div className="">
            <button type="submit" className="bg-blue w-100">
              <span className="text-white">{text.buttonSubmit}
              </span>
            </button>
            <div>
            <ReCAPTCHA
			      className= "mt-3"
				ref={recaptchaRef}
                  sitekey={process.env.REACT_APP_SITE_KEY}                
                  theme="dark"
                  onChange={onChangeCaptcha}
                />   
            </div>
            </div>
            {showFormIsInvalid && (
              <p className="error-text">{text.errorFormGeneral}</p>
            )}
          </div>
          
          </div>
          
          </div>
          {/* submit */}

          <div > 
         x
        </div>
      </form>
    </div>
    </Fragment>
  );
}

export default Form;
