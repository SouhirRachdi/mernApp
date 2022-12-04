import { ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL, } from "../ActionsType/ProductConstant";
  
  const initialState = {
    loading: false,
    products: [],
    errors: null,
    productEdit:{}
  };
  export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_PRODUCT_SUCCESS:
        return { ...state, products: payload, loading: false };
      case ADD_PRODUCT_FAIL:
        return { ...state, errors: payload };
      default:
        return state;
    }
  };