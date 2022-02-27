import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
  products: productReducer,
  product: selectedProductReducer,
});
