import axios from "axios";
import {AddUser_SUCCESS,AddUser_FAIL,  LOAD_USER} from "../ActionsType/UserConstant";

export const adduser = (newUser, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/user",
        newUser
      );
      dispatch({ type: AddUser_SUCCESS, payload: response.data.newUser })
      navigate("/product");
    } catch (error) {
      console.dir(error)
      dispatch({ type: AddUser_FAIL, payload: error });}
    }