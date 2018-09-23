import {SELECT_IMAGE} from "../actions/userAction";

// TODO action type
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
