import statusData from '../../helpers/data/statusData';
import utilities from '../../helpers/utilities';

import './eat.scss';

let full = statusData.getFullValue();

const eatSteak = (e) => {
  if (full <= 90) {
    full += 10;
  } else {
    full = 100;
  }
  const domString = `<span style="width: ${full}%"></span>`;
  if (e.target.id === 'steak-button') {
    utilities.printToDom('eat-meter', domString);
  }
};

const eatCandy = (e) => {
  if (full >= 3) {
    full -= 3;
  } else {
    full = 0;
  }
  const domString = `<span style="width: ${full}%"></span>`;
  if (e.target.id === 'candy-button') {
    utilities.printToDom('eat-meter', domString);
  }
};

const addEatClickEvents = () => {
  document.getElementById('steak-button').addEventListener('click', eatSteak);
  document.getElementById('candy-button').addEventListener('click', eatCandy);
};

export default { addEatClickEvents };
