import '../styles/main.scss';
// import '@fortawesome/fontawesome-free/js/all';
import quadList from './components/quadList/quadList';
import eat from './components/eat/eat';

const init = () => {
  quadList.makeQuadList();
  eat.addEatClickEvents();
};

init();
