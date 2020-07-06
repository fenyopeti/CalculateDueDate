const { destructureDate } = require('./destructureDate')

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
  
  const turnarountTimeHours = parseInt(turnaroundTime.split(' ')[0], 10)

  return new Date(submitYear, submitMonth, submitDate, submitHours + turnarountTimeHours, submitMinutes)
}

module.exports = { CalculateDueDate }