import {FETCH_IMAGES} from "../actions/shared";

export default function usersReducer(state = {}, action: any) {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.images
      };
    default:
      return state;
  }
};
