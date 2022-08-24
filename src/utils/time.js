const TOP = 21
const BOTTOM = 8

export function listWorkingHours (difference) {
    let nextDay = false

    if (TOP + difference > 24) {
        nextDay = true
    }

    let absolutedifference = Math.floor(difference)
    let differenceAfterComma = difference - absolutedifference

    console.log(difference)
    console.log(absolutedifference)
    console.log(differenceAfterComma)


    let loops = (TOP - BOTTOM) * 2
    let workingHours = []
    
    for (let i = 0; i < loops + 1; i++) {
        let hour = BOTTOM + Math.floor(i / 2)
        let minute = (i % 2) * 30 
        
        
        hour = hour + difference
        hour = Math.floor(hour)
        if (hour > 24) {    
            hour = hour - 24}
        
        if (differenceAfterComma == 0.5) {
            console.log(minute)
            if  (minute == 0) {
                minute = 30
           
            } else {
                minute = 0
                hour = hour + 1
            }
       
        }   
        if (differenceAfterComma == 0.75) {
            console.log(minute)
            if  (minute == 0) {
                minute = 45
           
            } else {
                minute = 15
                hour = hour + 1
            }
       
        } 

        if (hour == 25) {   
            hour = 1
        }

        if (hour == 24) {
            hour = 0
        }
       
        let time = {hour,minute}  

    workingHours.push(time)
    }
    return {workingHours , nextDay}
}

export function calculateHourDifference (offset) {
    let offsetArgentina = 3
    let difference = 0
    difference = offsetArgentina + offset
    return difference

}

export function daysOftheWeek (nextDay) {
    
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday']
    let nextDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let previousDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']

    if(nextDay){
        return nextDays
    }
    return days
}





