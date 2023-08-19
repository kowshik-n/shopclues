import React, { useState, useEffect } from "react";
import SingleCategory from "./SingleCategory";

const Categories = ({ categoriesData }) => {
  const { categories } = categoriesData;

  const [categorySelected, setCategorySelected] = useState(() => {
    const storedCategory = window.localStorage.getItem("CATEGORIES");
    return storedCategory ? JSON.parse(storedCategory) : [];
  });

  const [categorySelectedName, setCategorySelectedName] = useState(() => {
    const storedCategoryName = window.localStorage.getItem("CATEGORIES_NAME");
    return storedCategoryName ? JSON.parse(storedCategoryName) : "";
  });

  const selected = (category) => {
    setCategorySelectedName(category.name);
    setCategorySelected(category.id);
  };

  useEffect(() => {
    window.localStorage.setItem("CATEGORIES", JSON.stringify(categorySelected));
    window.localStorage.setItem(
      "CATEGORIES_NAME",
      JSON.stringify(categorySelectedName)
    );
  }, [categorySelected, categorySelectedName]);

  return (
    <>
      <div>categories</div>
      <ol>
        {categories.slice(0, 5).map((res) => {
          return (
            <li key={res.id}>
              <button onClick={() => selected(res)}>{res.name}</button>
            </li>
          );
        })}
      </ol>

      {categorySelected && (
        <SingleCategory
          id={categorySelected}
          name={categorySelectedName}
        ></SingleCategory>
      )}
    </>
  );
};

export default Categories;
