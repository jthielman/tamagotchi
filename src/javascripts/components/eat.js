import utilities from '../helpers/utilities';

let full = 100;

const domString = `
<h1>Eat</h1>
      <button id="steak-button">Steak dinner</button>
      <button id="candy-button">Candy</button>
      <div class="meter">
        <span style="width: ${full}%"></span>
      </div>
`;

const eatSteak = () => {
  full += 10;
  utilities.printToDom('eat', domString);
};

const showEat = () => {
  utilities.printToDom('eat', domString);
  document.getElementById('steak-button').addEventListener('click', eatSteak);
};

export default { showEat };
