const { CalculateDueDate } = require('./calculateDueDate');

describe('CalculateDueDate', () => {
  const expectations = [
    [new Date('2020. 07. 07. 15:05'), '1 hours', new Date('2020. 07. 07. 16:05')],
    [new Date('2020. 07. 07. 15:00'), '2 hours', new Date('2020. 07. 07. 17:00')],
    [new Date('2020. 07. 07. 15:05'), '2 hours', new Date('2020. 07. 08. 09:05')]
  ]

  test.each(expectations)('CalculateDueDate(%s, %s) should return %s', (submitDate, turnaroundTime, result) => {
    expect(CalculateDueDate(submitDate, turnaroundTime)).toEqual(result)
  })
})