import {AddUser_SUCCESS,AddUser_FAIL,  LOAD_USER} from "../ActionsType/UserConstant";

const intialState = {
    loading: false,
    currentUser: {},
    errors: null,
  };
  export const userReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case LOAD_USER:
        return { ...state, loading: true };
      case AddUser_SUCCESS :
        return { ...state, currentUser: payload, loading: false };
      case AddUser_FAIL:
        return { ...state, errors: payload, loading: false };
        default:
            return state;
        }
      };