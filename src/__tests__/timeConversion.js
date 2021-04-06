import timeConversion from '../timeConversion';

describe('gives correct time from input', () => {
  test('should give back 1 hour', () => {
    const time = timeConversion(3600);
    expect(time).toEqual({ hours: 1, minutes: 0, seconds: 0 });
  })

  test('should give back 1 hours 58 mins and 22 sec', () => {
    const time = timeConversion(7102);
    expect(time).toEqual({ hours: 1, minutes: 58, seconds: 22 });
  })

  test('should return 0 hrs 44 mins 10 sec', () => {
    const time = timeConversion(2650);
    expect(time).toEqual({ hours: 0, minutes: 44, seconds: 10 });
  })
})

describe('Finds for wrong inputs', () => {
  test('catches 0', () => {
    expect(timeConversion(0)).toBe(false);
  });

  test('catches string', () => {
    expect(timeConversion('astring')).toBeFalsy();
  })
  test('catches object', () => {
    expect(timeConversion({ someObj: true })).toBeFalsy();
  })
  test('catches infinity or big int', () => {
    expect(timeConversion(Infinity)).toBeFalsy();
  })
})
