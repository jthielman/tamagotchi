import statusData from '../../helpers/data/statusData';
import utilities from '../../helpers/utilities';

import './sleep.scss';

let energy = statusData.getEnergyValue();

const takeNap = (e) => {
  if (energy <= 50) {
    energy += 50;
  } else {
    energy = 100;
  }
  const domString = `<span style="width: ${energy}%"></span>`;
  if (e.target.id === 'nap-button') {
    utilities.printToDom('sleep-meter', domString);
  }
};

const deepSlumber = (e) => {
  if (energy <= 40) {
    energy += 60;
  } else {
    energy = 100;
  }
  const domString = `<span style="width: ${energy}%"></span>`;
  if (e.target.id === 'slumber-button') {
    utilities.printToDom('sleep-meter', domString);
  }
};

const addSleepClickEvents = () => {
  document.getElementById('nap-button').addEventListener('click', takeNap);
  document.getElementById('slumber-button').addEventListener('click', deepSlumber);
};

export default { addSleepClickEvents };
