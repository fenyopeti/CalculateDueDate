const { CalculateDueDate } = require('../src/calculateDueDate');

describe('CalculateDueDate', () => {
  const expectations = [
    [new Date('2020. 07. 07. 15:05'), 1, new Date('2020. 07. 07. 16:05')],
    [new Date('2020. 07. 07. 15:05'), 0.5, new Date('2020. 07. 07. 15:35')],
    [new Date('2020. 07. 07. 15:00'), 2, new Date('2020. 07. 07. 17:00')],
    [new Date('2020. 07. 07. 15:05'), 2, new Date('2020. 07. 08. 09:05')],
    [new Date('2020. 07. 07. 15:05'), 3, new Date('2020. 07. 08. 10:05')],
    [new Date('2020. 07. 07. 15:05'), 16, new Date('2020. 07. 09. 15:05')],
    [new Date('2020. 07. 10. 15:05'), 2 , new Date('2020. 07. 13. 09:05')],
    [new Date('2020. 07. 10. 15:05'), 42, new Date('2020. 07. 20. 09:05')],
  ]

  test.each(expectations)('CalculateDueDate(%s, %s) should return %s', (submitDate, turnaroundTime, result) => {
    expect(CalculateDueDate(submitDate, turnaroundTime)).toEqual(result)
  })

  it('CalculateDueDate should throw invalid date error', () => {
    let error
    try {
      CalculateDueDate(new Date('not a date'), 1)
    } catch (e) {
      error = e
    }

    expect(error.message).toBe('Invalid date input')
  })

  it('CalculateDueDate should throw invalid turnaround time error', () => {
    let error
    try {
      CalculateDueDate(new Date('2020. 07. 07. 15:05'), undefined)
    } catch (e) {
      error = e
    }

    expect(error.message).toBe('Invalid turnaroundTime input')
  })
})
