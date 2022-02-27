import { ActionTypes } from "../constants/action-type";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get(`products`);
  console.log(response);
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`products/${id}`);
  dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: response.data });
};

export const removeProducts = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCTS,
  };
};
