function addZero(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}

function getTime() {
  const date = new Date();
  const hour = addZero(date.getHours('HH'));
  const minute = addZero(date.getMinutes('mm'));
  const seconds = addZero(date.getSeconds('SS'));
  const time = `#${hour}${minute}${seconds}`;
  return time;
}

(() => {
  const clockContainer = document.querySelector('.clock-container');
  const timeStringContainer = document.createElement('p');
  timeStringContainer.classList.add('clock-container__hextime');

  setInterval(() => {
    const timeHex = getTime();
    timeStringContainer.innerHTML = getTime();
    clockContainer.style.backgroundColor = timeHex;
    clockContainer.append(timeStringContainer);
  }, 100);
})();