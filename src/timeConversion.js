
export default function timeConversion(timeInput) {
  // check time is valid number
  if (timeInput !== typeof 'number') {
    return false;
  }

  let hours = Math.floor(timeInput / 60 / 60);
  let mins = Math.floor(timeInput / 60);
}