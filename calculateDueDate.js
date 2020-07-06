const { destructureDate } = require('./destructureDate')
const { parseTurnaroundToHours } = require('./parseTurnaroundToHours')

const CalculateDueDate = (submitTime, turnaroundTime) => {
  const dateObject = destructureDate(submitTime)
  if (!dateObject) {
    return
  }

  const {
    year: submitYear,
    month: submitMonth,
    day: submitDay,
    date: submitDate,
    hours: submitHours,
    minutes: submitMinutes
  } = dateObject
  
  const turnarountTimeHours = parseTurnaroundToHours(turnaroundTime)
  const END_OF_DAY = 17
  const START_OF_DAY = 9
  if (submitHours + turnarountTimeHours >= END_OF_DAY && submitMinutes) {
    const hoursRemaining = turnarountTimeHours - (END_OF_DAY - submitHours)
    return new Date(submitYear, submitMonth, submitDate + 1, START_OF_DAY + hoursRemaining, submitMinutes)
  }

  return new Date(submitYear, submitMonth, submitDate, submitHours + turnarountTimeHours, submitMinutes)
}

module.exports = { CalculateDueDate }