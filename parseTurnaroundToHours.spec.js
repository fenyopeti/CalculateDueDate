const { parseTurnaroundToHours } = require('./parseTurnaroundToHours');

describe('parseTurnaroundToHours', () => {
  const expectations = [
    ['1 hours', 1],
  ]

  test.each(expectations)('parseTurnaroundToHours(%s) should return %s', (turnarundString, result) => {
    expect(parseTurnaroundToHours(turnarundString)).toEqual(result)
  })
})