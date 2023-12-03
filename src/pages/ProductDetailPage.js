import React from "react";
import ProductDetail from "../features/product/components/ProductDetail";
import NavBar from "../features/navbar/NavBar";
const ProductDetailPage = () => {
  return (
    <div>
      <NavBar>
        <ProductDetail />
      </NavBar>
    </div>
  );
};

export default ProductDetailPage;
