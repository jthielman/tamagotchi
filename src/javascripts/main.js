import '../styles/main.scss';
// import '@fortawesome/fontawesome-free/js/all';
import eat from './components/eat/eat';
import play from './components/play/play';
import quadList from './components/quadList/quadList';
import sleep from './components/sleep/sleep';

const init = () => {
  quadList.makeQuadList();
  eat.addEatClickEvents();
  play.addPlayClickEvents();
  sleep.addSleepClickEvents();
};

init();
