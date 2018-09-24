import {SELECT_IMAGE} from "../actions/userAction";

/**
 * reducer for all user related actions
 * @param state
 * @param action
 */

export default function userReducer(state = {}, action: any) {
  switch (action.type) {

    case SELECT_IMAGE:
      return {
        ...state,
        userIsViewing: action.id
      };

    default:
      return {...state};
  }
}
