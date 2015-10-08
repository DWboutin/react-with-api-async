import { ACTIONS } from '../utils/consts';
import mockedCreatives from '../utils/mocked-creatives';

const initialState = {
  isFetching: false,
  items: []
};

export function creatives(state = initialState, action = '') {
  switch (action.type) {
    case ACTIONS.REQUEST_CREATIVES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ACTIONS.RECEIVE_CREATIVES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data
      });
    default:
      return state;
  }
}