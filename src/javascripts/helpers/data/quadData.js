const quads = [
  {
    id: 'eat',
    name: 'Eat',
    buttons: [
      {
        id: 'steak-button',
        name: 'Steak dinner',
        value: 10,
      },
      {
        id: 'candy-button',
        name: 'Candy',
        value: -3,
      },
    ],
    statusId: 'status1',
  },
  {
    id: 'play',
    name: 'Play',
    buttons: [
      {
        id: 'karaoke-button',
        name: 'Karaoke',
        value: 50,
      },
      {
        id: 'tictactoe-button',
        name: 'Tic tac toe',
        value: 2,
      },
    ],
    statusId: 'status2',
  },
  {
    id: 'fight',
    name: 'Fight',
    buttons: [
      {
        id: 'run-button',
        name: 'Run away!',
        value: 1,
      },
      {
        id: 'violence-button',
        name: 'Commit act of violence',
        value: -10,
      },
    ],
    statusId: 'status3',
  },
  {
    id: 'sleep',
    name: 'Sleep',
    buttons: [
      {
        id: 'nap-button',
        name: 'Nap',
        value: 50,
      },
      {
        id: 'slumber-button',
        name: 'Deep slumber',
        value: 60,
      },
    ],
    statusId: 'status4',
  },
];

const getQuads = () => quads;

export default { getQuads };
