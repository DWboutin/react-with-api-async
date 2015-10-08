import request from 'superagent';
import { ACTIONS, API_URL } from '../utils/consts';


export function requestCreactives() {
  return {
    type: ACTIONS.REQUEST_CREATIVES

  }
}

export function receiveCreatives(data) {
  return {
    type: ACTIONS.RECEIVE_CREATIVES,
    data: data,
    receivedAt: Date.now()
  }
}

export function fetchCreatives() {
  // thunk middleware knows how to handle functions
  return function (dispatch) {
    dispatch(requestCreactives());

    // Return a promise to wait for
    // (this is not required by thunk middleware, but it is convenient for us)
    return request.get(API_URL).end((err, res) => dispatch(receiveCreatives(res.body)));
  };
}