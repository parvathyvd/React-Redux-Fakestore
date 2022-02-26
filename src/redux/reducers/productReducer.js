import { ActionTypes } from "../constants/action-type";

const initState = {
  products: [],
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_PRODUCTS:
      return {};
    default:
      return state;
  }
};
