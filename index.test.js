const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times before 30 mins - 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('Handles times before 30 mins non quarter - 2:14', () => {
    const timeInWords = convertTimeToWords('2:14');
    expect(timeInWords).toBe('fourteen past two');
  });

  it('Handles times after 30 mins non quarter - 2:44', () => {
    const timeInWords = convertTimeToWords('2:44');
    expect(timeInWords).toBe('sixteen to three');
  });

  it('Handles 0 minutes - 8:00', () => {
    const timeInWords = convertTimeToWords('8:00');
    expect(timeInWords).toBe("eight o'clock");
  });
});
// send quinn@sitemate.com
