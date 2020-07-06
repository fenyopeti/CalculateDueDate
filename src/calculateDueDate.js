const { destructureDate } = require('./destructureDate')
const { calculateTurnaroundDate } = require('./calculateTurnaroundDate')

/**
 * Calculates when will be the issue resolved
 * @param {Date} submitDate Date when the issue was reported
 * @param {Number} turnaroundTime Number of hours the issue needs to be resolved
 * @returns {Date} Date of the resolved issue
 */
const CalculateDueDate = (submitDate, turnaroundTime) => {
  if (!turnaroundTime || turnaroundTime < 0) {
    throw new Error('Invalid turnaroundTime input')
  }

  const dateObject = destructureDate(submitDate)
  if (!dateObject) {
    throw new Error('Invalid date input')
  }

  const {
    year,
    month,
    date,
    hours,
    minutes,
  } = calculateTurnaroundDate(dateObject, turnaroundTime)

  return new Date(year, month, date, hours, minutes)
}

module.exports = { CalculateDueDate }