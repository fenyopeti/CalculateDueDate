
const destructureDate = date => {
  if(!date instanceof Date || isNaN(date)) {
    return
  }

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    day: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes()
  }
}

module.exports = {
  destructureDate
}