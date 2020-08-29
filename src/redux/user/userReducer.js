import { ADD_USER, REMOVE_USER } from "./userTypes";
const INITIAL_STATE = {
  user: null,
};

const cartItems = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default cartItems;
