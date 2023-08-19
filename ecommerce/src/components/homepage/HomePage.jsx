import React, { useEffect } from "react";
import NavBar from "../navBar/NavBar";
import Categories from "../categories/Categories";
import TopSellingProducts from "../topSellingProducts/TopSellingProducts";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  multiplyByTwo,
  addthisValue,
} from "../../redux store/slices/counterSlices";
import axios from "axios";
import { fetchApi } from "../../redux store/slices/apiCallDataSlice";
import SingleCategory from "../categories/SingleCategory";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function apiData() {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/categories`
        );

        dispatch(fetchApi(response.data));
      } catch (error) {}
    }
    apiData();
  }, []);

  const count = useSelector((state) => {
    return state.counter;
  });

  const categoriesData = useSelector((state) => {
    return state.apiData;
  });

  const incrementBy1 = () => {
    dispatch(increment());
  };

  const decrementBy1 = () => {
    dispatch(decrement());
  };

  const multiplyByTwoNum = () => {
    dispatch(multiplyByTwo());
  };

  const addthisValueNum = () => {
    dispatch(addthisValue(20));
  };

  const fetchingApi = () => {};

  return (
    <>
      <NavBar></NavBar>
      <div>Homepage image{count.value}</div>

      <button onClick={incrementBy1}>Increment</button>
      <button onClick={decrementBy1}>Decrement</button>
      <button onClick={multiplyByTwoNum}>multiplyByTwo by 2</button>
      <button onClick={addthisValueNum}>AddthisValue</button>
      {/* <button onClick={fetchingApi}> </button> */}

      <Categories categoriesData={categoriesData}></Categories>
      {/* <SingleCategory></SingleCategory> */}
      <TopSellingProducts></TopSellingProducts>
    </>
  );
};

export default HomePage;
