import { ACTIONS } from '../utils/consts';
import mockedCreatives from '../utils/mocked-creatives';

const initialState = mockedCreatives;

export function creatives(state = initialState, action = '') {
  switch (action.type) {
    case ACTIONS.GET_CREATIVES:
      return state;
    default:
      return state;
  }
}