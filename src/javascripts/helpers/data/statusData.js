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

const getInitialValue = (arr, statusName) => {
  let status;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === statusName) {
      status = arr[i].initialValue;
    }
  }
  return status;
};

const getFullValue = () => getInitialValue(statuses, 'full');
const getFunValue = () => getInitialValue(statuses, 'fun');
const getStrengthValue = () => getInitialValue(statuses, 'strength');
const getEnergyValue = () => getInitialValue(statuses, 'energy');

export default {
  getStatuses, getFullValue, getFunValue, getStrengthValue, getEnergyValue,
};
