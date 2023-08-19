import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedCategory,
  selectedProduct,
} from "../../redux store/slices/apiCallDataSlice";
import "./singleCategory.css";
import { useNavigate } from "react-router-dom";

const SingleCategory = ({ id, name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const idNum = id;

  useEffect(() => {
    async function getSingleCategory() {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products`
        );

        const updated = response.data.slice(0, 50).filter((data, index) => {
          return data.category.name === name;
        });

        dispatch(selectedCategory(updated));
      } catch (error) {}
    }

    getSingleCategory();
  }, [idNum]);

  const data = useSelector((selected) => selected.apiData.selectedCategory);

  const selectedproducthandle = (selectedProdu) => {
    console.log(selectedProdu, "[]]]]]]]]]");
    dispatch(selectedProduct(selectedProdu));
    navigate("/about");
  };

  return (
    <>
      <div>
        Single Category:{id}
        {name}
      </div>

      {data.map((list) => {
        return (
          <div
            className="card"
            key={list.id}
            onClick={() => selectedproducthandle(list)}
          >
            <img src={list.images[0]} alt="Avatar" className="imgWid" />
            <div className="container">
              <h4>
                <b>TITLE :{list.title}</b>
              </h4>
              <p>PRICE :{list.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleCategory;
