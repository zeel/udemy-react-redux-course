import { SIGN_IN, SIGN_OUT } from "../actions/types";
export default (
  state = {
    isSignedIn: null
  },
  action
) => {
  switch (action.type) {
    case SIGN_IN:
      state = { ...state, isSignedIn: true };
      break;
    case SIGN_OUT:
      state = { ...state, isSignedIn: false };
      break;
    default:
      state = {
        isSignedIn: null
      };
  }
  return state;
};
