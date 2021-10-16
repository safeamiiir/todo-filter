import { useState, useEffect } from 'react';

import { ListType } from 'types/requests.interface';
import { FETCH_STATES } from 'constant';

interface stateType {
  status: FETCH_STATES;
  error: null | string;
  data: null | Array<ListType>;
}

export const useRequest = (
  promise: () => Promise<Array<ListType>>
): stateType => {
  const [state, setState] = useState<stateType>({
    status: FETCH_STATES.LOADING,
    error: null,
    data: null,
  });
  useEffect(() => {
    promise()
      .then((data) => {
        setState({ status: FETCH_STATES.COMPLETE, error: null, data });
      })
      .catch((error) => {
        setState({ status: FETCH_STATES.ERROR, error, data: null });
      });
  }, [promise]);

  return state;
};
