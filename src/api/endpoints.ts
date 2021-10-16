import { requestCreator } from 'api';

const requests = {
  getTodos: requestCreator({
    url: '/todos',
    method: 'get',
  }),
};

export default requests;
