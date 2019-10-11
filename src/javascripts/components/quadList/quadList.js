import quad from '../quad/quad';
import quadData from '../../helpers/data/quadData';
import statusData from '../../helpers/data/statusData';
import utilities from '../../helpers/utilities';

import './quadList.scss';

const makeQuadList = () => {
  const quads = quadData.getQuads();
  const statuses = statusData.getStatuses();
  for (let i = 0; i < quads.length; i += 1) {
    for (let j = 0; j < statuses.length; j += 1) {
      if (quads[i].statusId === statuses[j].id) {
        utilities.printToDom(quads[i].id, quad.makeQuad(quads[i], statuses[j]));
      }
    }
  }
};

export default { makeQuadList };
