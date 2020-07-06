const { calculateTurnaroundDate } = require('../src/calculateTurnaroundDate')

describe('calculateTurnaroundDate', () => {
    const expectations = [
      [{ year: 2020, month: 6, date: 7, day: 2, hours: 15, minutes: 5 }, 0.5, { year: 2020, month: 6, date: 7, hours: 15, minutes: 35 }],
      [{ year: 2020, month: 6, date: 7, day: 2, hours: 15, minutes: 30 }, 0.5, { year: 2020, month: 6, date: 7, hours: 16, minutes: 0 }],
      [{ year: 2020, month: 6, date: 7, day: 2, hours: 15, minutes: 5 }, 1, { year: 2020, month: 6, date: 7, hours: 16, minutes: 5 }],
      [{ year: 2020, month: 6, date: 7, day: 2, hours: 15, minutes: 0 }, 2, { year: 2020, month: 6, date: 7, hours: 17, minutes: 0 }],
      [{ year: 2020, month: 6, date: 7, day: 2, hours: 15, minutes: 5 }, 2, { year: 2020, month: 6, date: 8, hours: 9, minutes: 5 }],
      [{ year: 2020, month: 6, date: 7, day: 2, hours: 15, minutes: 5 }, 10, { year: 2020, month: 6, date: 9, hours: 9, minutes: 5 }],
      [{ year: 2020, month: 6, date: 7, day: 2, hours: 15, minutes: 5 }, 19, { year: 2020, month: 6, date: 10, hours: 10, minutes: 5 }],
      [{ year: 2020, month: 6, date: 10, day: 5, hours: 15, minutes: 5 }, 2, { year: 2020, month: 6, date: 13, hours: 9, minutes: 5 }],
      [{ year: 2020, month: 6, date: 10, day: 5, hours: 15, minutes: 5 }, 42, { year: 2020, month: 6, date: 20, hours: 9, minutes: 5 }],
    ]
  
    test.each(expectations)('calculateTurnaroundDate(%s, %s) should return %s', (submitDate, turnaroundTime, result) => {
      expect(calculateTurnaroundDate(submitDate, turnaroundTime)).toEqual(result)
    })
  })