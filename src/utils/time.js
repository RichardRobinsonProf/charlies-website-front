const TOP = 21;
const BOTTOM = 8;

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

  console.log(difference);
  console.log(absolutedifference);
  console.log(differenceAfterComma);

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

    if (differenceAfterComma == 0.5) {
      console.log(minute);
      if (minute == 0) {
        minute = 30;
      } else {
        minute = 0;
        hour = hour + 1;
      }
    }
    if (differenceAfterComma == 0.75) {
      console.log(minute);
      if (minute == 0) {
        minute = 45;
      } else {
        minute = 15;
        hour = hour + 1;
      }
    }

    if (hour == 25) {
      hour = 1;
    }

    if (hour == 24) {
      hour = 0;
    }

    if (hour < 0){
      hour = hour + 24;
    }

    let time = { hour, minute };

    workingHours.push(time);
  }


  return { workingHours, nextDay, previousDay };
}

export function calculateHourDifference(offset) {
  let offsetArgentina = 3;
  let difference = 0;
  difference = offsetArgentina + offset;
  console.log(difference)
  return difference;
}

export function listWorkingDays(nextDay, previousDay) {
  let days = [
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday"];

  let nextDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let previousDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  if (nextDay) {
    return nextDays;
  }
  if (previousDay){
    return previousDays;
  }
  return days;
}

export function listMatrix (workingdays, workinghours, nextDay, previousDay) {
  let matrix = [];
  for (let i = 0; i < workingdays.length; i++) {
    let day = workingdays[i];
    matrix.push([])
    console.log(day)

    if(nextDay){
      let j = 0;
      let hour = workinghours[j].hour;
      if (day == "Monday"){
        while (hour != 0) {
          console.log(hour)
          matrix[i].push(workinghours[j]);
          j++;
          hour = workinghours[j].hour;
        } 
      }
      if (day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
        let j = 0;
        let hour = workinghours[j].hour;
        let passedZero = false
        while(j < workinghours.length ){
          if (workinghours[j].hour == 0){
            passedZero = true;
          }
          if (passedZero){
            matrix[i].push(workinghours[j]);
          }
          j++;
        }
        j = 0;
        while (hour != 0) {
          console.log(hour)
          matrix[i].push(workinghours[j]);
          j++;
          hour = workinghours[j].hour;
        } 
      }
      if (day == "Saturday"){
        let j = 0
        let passedZero = false
        while(j < workinghours.length ){
          if (workinghours[j].hour == 0){
            passedZero = true;
          }
          if (passedZero){
            matrix[i].push(workinghours[j]);
          }
          j++;
        }
      }
      }else{
        for (let j = 0; j < workinghours.length; j++) {
          matrix[i].push(workinghours[j]);
        }
      }
      
    }
     
  return matrix;
}


