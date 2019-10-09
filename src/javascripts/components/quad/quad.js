import './quad.scss';

const makeQuad = (quad, status) => {
  const domString = `
  <h1>${quad.name}</h1>
    <button id="${quad.buttons[0].id}">${quad.buttons[0].name}</button>
    <button id="${quad.buttons[1].id}">${quad.buttons[1].name}</button>
    <div id="${quad.name.toLowerCase()}-meter" class="meter">
      <span style="width: ${status}%"></span>
    </div>
  `;
  return domString;
};

export default { makeQuad };
