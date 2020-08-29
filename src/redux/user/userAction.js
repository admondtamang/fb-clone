import { ADD_USER, REMOVE_USER } from "./userTypes";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const removeUser = (user) => {
  return {
    type: REMOVE_USER,
    payload: user,
  };
};
