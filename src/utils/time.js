import {English} from '../text/text-english'
import {Spanish} from '../text/text-spanish'

const TOP = 21;
const BOTTOM = 7;
const OFFSETARGENTINA = 3;

export function argentineWorkingHours() {
  return listWorkingHours(0);
}

export function listWorkingHours(difference) {
  let nextDay = false;
  let previousDay = false;

  if (TOP + difference > 24) {
    nextDay = true;
  }

  if (BOTTOM + difference < 0) {
    previousDay = true;
  }

  let absolutedifference = Math.floor(difference);
  let differenceAfterComma = difference - absolutedifference;

  let loops = (TOP - BOTTOM) * 2;
  let workingHours = [];

  for (let i = 0; i < loops + 1; i++) {
    let hour = BOTTOM + Math.floor(i / 2);
    let minute = (i % 2) * 30;

    hour = hour + difference;
    hour = Math.floor(hour);
    if (hour > 24) {
      hour = hour - 24;
    }

    if (differenceAfterComma === 0.5) {
      if (minute === 0) {
        minute = 30;
      } else {
        minute = 0;
        hour = hour + 1;
      }
    }
    if (differenceAfterComma === 0.75) {
      if (minute === 0) {
        minute = 45;
      } else {
        minute = 15;
        hour = hour + 1;
      }
    }

    if (hour === 25) {
      hour = 1;
    }

    if (hour === 24) {
      hour = 0;
    }

    if (hour < 0) {
      hour = hour + 24;
    }

    let time = { hour, minute };

    workingHours.push(time);
  }

  return { workingHours, nextDay, previousDay };
}

export function calculateHourDifference(offset) {
  let difference = 0;
  difference = OFFSETARGENTINA + offset;

  return difference;
}


export function listWorkingDays(nextDay, previousDay, ctxLanguage) {

  let daysInRightLanguage  = ctxLanguage === 'English' ? English : Spanish;


  let days = [
    daysInRightLanguage.monday, 
    daysInRightLanguage.tuesday,
    daysInRightLanguage.wednesday,
    daysInRightLanguage.thursday,
    daysInRightLanguage.friday,
  ]
  let nextDays = [
    daysInRightLanguage.monday,
    daysInRightLanguage.tuesday,
    daysInRightLanguage.wednesday,
    daysInRightLanguage.thursday,
    daysInRightLanguage.friday,
    daysInRightLanguage.saturday
  ];
  let previousDays = [
    daysInRightLanguage.sunday,
    daysInRightLanguage.monday,
    daysInRightLanguage.tuesday,
    daysInRightLanguage.wednesday,
    daysInRightLanguage.thursday,
    daysInRightLanguage.friday
  ];
  if (nextDay) {
    return nextDays;
  }
  if (previousDay) {
    return previousDays;
  }
  return days;
}

export function listMatrix(workingdays, workinghours, nextDay, previousDay) {
  let matrix = [];
  let matrixValue = [];

  for (let i = 0; i < workingdays.length; i++) {
    let day = workingdays[i];
    matrix.push([]);
    matrixValue.push([]);

    if (nextDay) {
      let j = 0;
      let hour = workinghours[j].hour;
      if (day === "Monday") {
        matrix = endday(workinghours, j, hour, matrix, i);
      }
      if (
        day === "Tuesday" ||
        day === "Wednesday" ||
        day === "Thursday" ||
        day === "Friday"
      ) {
        let j = 0;
        let hour = workinghours[j].hour;
        let passedZero = false;
        matrix = beginday(workinghours, j, hour, matrix, i, passedZero);
        j = 0;
        matrix = endday(workinghours, j, hour, matrix, i);
      }
      if (day === "Saturday") {
        let j = 0;
        let passedZero = false;
        matrix = beginday(workinghours, j, hour, matrix, i, passedZero);
      }
    } else if (previousDay) {
      let j = 0;
      let hour = workinghours[j].hour;
      if (day === "Sunday") {
        matrix = endday(workinghours, j, hour, matrix, i);
      }
      if (
        day === "Monday" ||
        day === "Tuesday" ||
        day === "Wednesday" ||
        day === "Thursday"
      ) {
        let j = 0;
        let hour = workinghours[j].hour;
        let passedZero = false;
        matrix = beginday(workinghours, j, hour, matrix, i, passedZero);
        j = 0;
        matrix = endday(workinghours, j, hour, matrix, i);
      }

      if (day === "Friday") {
        let j = 0;
        let hour = workinghours[j].hour;
        let passedZero = false;
        matrix = beginday(workinghours, j, hour, matrix, i, passedZero);
      }
    } else {
      for (let j = 0; j < workinghours.length; j++) {
        matrix[i].push(workinghours[j]);
      }
    }
  }

  return matrix;
}

function endday(workinghours, j, hour, matrix, i) {
  while (hour !== 0) {
    matrix[i].push(workinghours[j]);
    j++;
    hour = workinghours[j].hour;
  }
  return matrix;
}

function beginday(workinghours, j, hour, matrix, i, passedZero) {
  while (j < workinghours.length) {
    if (workinghours[j].hour === 0) {
      passedZero = true;
    }
    if (passedZero) {
      matrix[i].push(workinghours[j]);
    }
    j++;
  }
  return matrix;
}

export function listWorkingHoursMatrix(dayValue, matrix, workingdays) {
  let i = 0;
  if (dayValue) {
    while (i < workingdays.length && workingdays[i] !== dayValue) {
      i++;
    }
  } 
  let j = 0
  let workinghoursAdjusted = [];
  matrix[i].forEach((time) => {

    workinghoursAdjusted.push(
      {hour:time.hour,
      minute:time.minute,
      timeConcatenated: time.hour + ":" + time.minute,
      index: j});
    j++;   
  })
  return workinghoursAdjusted;
}



export function convertToArgentineTime(day, hour, minute, difference) {
  let daysOftheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let i = 0;
  while (i < daysOftheWeek.length && daysOftheWeek[i] !== day) {
    i++;
  }
  if (minute === '15') {
    hour = hour + 0.25;
  } else if (minute === '45') {
    hour = hour + 0.75;
  } else if (minute === '30') {
    hour = hour + 0.5;
  } else {
    hour = hour + 0;
  }
  console.log(hour, difference)

  if (hour - difference < 0) {
    hour = hour - difference + 24;
    if (i === 0) {
      i = 6;
    } else {
      i = i - 1;
    }
  } else if (hour - difference > 24) {
    hour = hour - difference - 24;
    if (i === 6) {
      i = 0;
    } else {
      i = i + 1;
    }

  } else {
    hour = hour - difference;
  }

  if (hour - Math.floor(hour) === 0.5) {
    minute = 30;
  } else if (hour - Math.floor(hour) === 0.75) {
    minute = 45;
  } else if (hour - Math.floor(hour) === 0.25) {
    minute = 15;
  } else {
    minute = 0;
  }

  let retorno = {
    day: daysOftheWeek[i],
    hour: Math.floor(hour),
    minute: minute,
  };
  return retorno;
}

export function convertDayToEnglish(day){
  switch (day) {
    case 'Lunes': return 'Monday';
    case 'Martes': return 'Tuesday';
    case 'Miércoles': return 'Wednesday';
    case 'Jueves': return 'Thursday';
    case 'Viernes': return 'Friday';
    case 'Sábado': return 'Saturday';
    case 'Domingo': return 'Sunday';
}
}

export function convertDayToSpanish(day){
  switch (day) {
    case 'Monday': return 'Lunes';
    case 'Tuesday': return 'Martes';
    case 'Wednesday': return 'Miércoles';
    case 'Thursday': return 'Jueves';
    case 'Friday': return 'Viernes';
    case 'Saturday': return 'Sábado';
    case 'Sunday': return 'Domingo';
}
}
