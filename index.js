// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!

  // special edge case
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return "midday";
  };

  const numberToWord = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "thirty"
  };

  const quarterTime = {
    15: "quarter past ",
    30: "half past ",
    45: "quarter to "
  }

  // parse param into numbers
  let [hours, minutes] = time.split(":")
  hours = Number(hours);
  minutes = Number(minutes);

  // handle quarter times
  if (minutes == 15 || minutes == 30) {
    return quarterTime[minutes] + numberToWord[hours];
  }
  if (minutes == 45) {
    return quarterTime[minutes] + numberToWord[hours + 1]
  }

  // handle nonquarter times
  if (minutes > 30) {
    return numberToWord[60 - minutes] + ' to ' + numberToWord[hours + 1]
  }


  // 0 o'clock
  if (minutes == 0) {
    return numberToWord[hours] + " o'clock"
  }

  if (minutes < 30) {
    return numberToWord[minutes] + ' past ' + numberToWord[hours]
  }

}

module.exports = { convertTimeToWords };