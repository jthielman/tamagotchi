import statusData from '../../helpers/data/statusData';
import utilities from '../../helpers/utilities';

import './play.scss';

let fun = statusData.getFunValue();

const singKaraoke = (e) => {
  if (fun <= 50) {
    fun += 50;
  } else {
    fun = 100;
  }
  const domString = `<span style="width: ${fun}%"></span>`;
  if (e.target.id === 'karaoke-button') {
    utilities.printToDom('play-meter', domString);
    utilities.printToDom('fun', `${fun}%`);
  }
};

const deepSlumber = (e) => {
  if (fun <= 98) {
    fun += 2;
  } else {
    fun = 100;
  }
  const domString = `<span style="width: ${fun}%"></span>`;
  if (e.target.id === 'tictactoe-button') {
    utilities.printToDom('play-meter', domString);
    utilities.printToDom('fun', `${fun}%`);
  }
};

const addPlayClickEvents = () => {
  document.getElementById('karaoke-button').addEventListener('click', singKaraoke);
  document.getElementById('tictactoe-button').addEventListener('click', deepSlumber);
};

export default { addPlayClickEvents };
