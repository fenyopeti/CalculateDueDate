const parseTurnaroundToHours = (turnaroundTimeString) => {
  return parseInt(turnaroundTimeString.split(' ')[0], 10)
}

module.exports = { parseTurnaroundToHours }
