import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //   const fetchProducts = async () => {
  //     const res = await axios
  //       .get("https://fakestoreapi.com/products")
  //       .catch((err) => {
  //         console.log("Err", err);
  //       });
  //     dispatch(setProducts(res.data));
  //   };

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
