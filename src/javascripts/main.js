import '../styles/main.scss';
// import '@fortawesome/fontawesome-free/js/all';
import eat from './components/eat/eat';
import quadList from './components/quadList/quadList';
import sleep from './components/sleep/sleep';

const init = () => {
  quadList.makeQuadList();
  eat.addEatClickEvents();
  sleep.addSleepClickEvents();
};

init();
