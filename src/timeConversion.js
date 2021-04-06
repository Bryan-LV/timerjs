
export default function timeConversion(timeInput) {
  // check time is valid number
  if (typeof timeInput !== 'number' || !Number.isFinite(timeInput) || timeInput - 0 === 0) {
    return false;
  }

  let hours = Math.floor(timeInput / 3600);
  let minutes = Math.floor(timeInput % 3600 / 60);
  let seconds = Math.floor(timeInput % 3600 % 60);

  return { hours, minutes, seconds }
}

