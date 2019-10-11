import statusData from '../../helpers/data/statusData';
import utilities from '../../helpers/utilities';

import './fight.scss';

let strength = statusData.getStrengthValue();

const runAway = (e) => {
  if (strength <= 99) {
    strength += 1;
  } else {
    strength = 100;
  }
  const domString = `<span style="width: ${strength}%"></span>`;
  if (e.target.id === 'run-button') {
    utilities.printToDom('fight-meter', domString);
    utilities.printToDom('strength', `${strength}%`);
  }
};

const commitViolence = (e) => {
  if (strength >= 10) {
    strength -= 10;
  } else {
    strength = 0;
  }
  const domString = `<span style="width: ${strength}%"></span>`;
  if (e.target.id === 'violence-button') {
    utilities.printToDom('fight-meter', domString);
    utilities.printToDom('strength', `${strength}%`);
  }
};

const addFightClickEvents = () => {
  document.getElementById('run-button').addEventListener('click', runAway);
  document.getElementById('violence-button').addEventListener('click', commitViolence);
};

export default { addFightClickEvents };
