import React from "react";
import { useSelector } from "react-redux";
import "./aboutProduct.css";

const AboutProduct = () => {
  const data = useSelector((state) => {
    return state.apiData.seletedProduct;
  });

  return (
    <>
      <div className="card">
        <img src={data.images[0]} alt="" />
        <div>TITLE:{data.title}</div>
        <div>PRICE:{data.price}</div>
        <div>DESCRIPTION:{data.description}</div>
      </div>
    </>
  );
};

export default AboutProduct;
