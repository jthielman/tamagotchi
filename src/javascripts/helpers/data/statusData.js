const statuses = [
  {
    id: 'status1',
    name: 'full',
    initialValue: 10,
  },
  {
    id: 'status2',
    name: 'fun',
    initialValue: 50,
  },
  {
    id: 'status3',
    name: 'strength',
    initialValue: 100,
  },
  {
    id: 'status4',
    name: 'energy',
    initialValue: 50,
  },
];

const getStatuses = () => statuses;

const getFull = (arr) => {
  let full;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === 'full') {
      full = arr[i].initialValue;
    }
  }
  return full;
};

const getFullValue = () => getFull(statuses);

export default { getStatuses, getFullValue };
