const { destructureDate } = require('./destructureDate');

describe('destructureDate', () => {
  const expectations = [
    [new Date('2020. 07. 07. 15:05'), {
        year: 2020,
        month: 6,
        day: 2,
        date: 7,
        hours: 15,
        minutes: 5
    }],
    ['not a date', undefined]
  ]

  test.each(expectations)('destructureDate(%s) should return %s', (date, result) => {
    expect(destructureDate(date)).toEqual(result)
  })
})