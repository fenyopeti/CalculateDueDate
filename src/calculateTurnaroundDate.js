const END_OF_DAY = 17
const START_OF_DAY = 9
const WORKING_HOURS = END_OF_DAY - START_OF_DAY
const WEEKDAYS_COUNT = 5
const WEEKEND_COUNT = 2
const HOUR_TO_MINUTES = 60

const calculateEndMinutes = (turnaroundHours, submitMinutes) => {
  const minutesToAdd = (turnaroundHours % 1) * HOUR_TO_MINUTES

  const allMinutes = submitMinutes + minutesToAdd
  const minutesLeftovers = allMinutes >= HOUR_TO_MINUTES ? 1 : 0
  const minutes = allMinutes >= HOUR_TO_MINUTES ? allMinutes - HOUR_TO_MINUTES : allMinutes
  return { minutes, minutesLeftovers }
}

const calculateDaysAndHours = (submitDay, submitHours, hoursToAdd) => {
  let daysToAdd = 0
  while (submitHours + hoursToAdd >= END_OF_DAY) {
    daysToAdd++
    hoursToAdd -= WORKING_HOURS
  }

  submitDay = submitDay + daysToAdd
  while (submitDay > WEEKDAYS_COUNT) {
    daysToAdd += WEEKEND_COUNT
    submitDay -= WEEKDAYS_COUNT
  }

  const hours = submitHours + hoursToAdd
  return { daysToAdd, hours }
}

const calculateTurnaroundDate = ({
  year: submitYear,
  month: submitMonth,
  day: submitDay,
  date: submitDate,
  hours: submitHours,
  minutes: submitMinutes
}, turnaroundHours) => {
  const { minutes, minutesLeftovers } = calculateEndMinutes(turnaroundHours, submitMinutes)
  let hoursToAdd = minutesLeftovers + Math.floor(turnaroundHours / 1)

  const isDayNotOverlapping = submitHours + hoursToAdd < END_OF_DAY || (submitHours + hoursToAdd === END_OF_DAY && !minutes)
  if (isDayNotOverlapping) {
    return {
      year: submitYear,
      month: submitMonth,
      date: submitDate,
      hours: submitHours + hoursToAdd,
      minutes: minutes
    }
  }

  const { daysToAdd, hours } = calculateDaysAndHours(submitDay, submitHours, hoursToAdd)

  return {
    year: submitYear,
    month: submitMonth,
    date: submitDate + daysToAdd,
    hours,
    minutes: minutes
  }
}


module.exports = {
  calculateTurnaroundDate
}
