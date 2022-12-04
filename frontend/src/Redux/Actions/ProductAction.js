
import axios from "axios";
import {ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAIL,} from "../ActionsType/ProductConstant";
  
    export const addProduct = (newProduct, navigate) => async (dispatch) => {
        try {
          
          const response = await axios.post(
            "http://localhost:5000/api/products/addproduct",
            newProduct
          );
          console.log(response);
          dispatch({ type: ADD_PRODUCT_SUCCESS });
          navigate("/");
        } catch (error) {
          console.dir(error);
          dispatch({ type: ADD_PRODUCT_FAIL, payload: error });
        }
      };