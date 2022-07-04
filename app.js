CURRENT_YEAR = 2022

const howOld = (age, year) => {
  if (year > CURRENT_YEAR) {
    age += (year - CURRENT_YEAR);
    return `You will be ${age} in the year ${year}`;
  } else if (year < (CURRENT_YEAR - age)) {
      diff = CURRENT_YEAR - age - year;
      return `The year ${year} was ${diff} years before you were born`;
    } else {
        diff = age -(CURRENT_YEAR - year);
        return `You were ${diff} in the year ${year}`;
  }
};
