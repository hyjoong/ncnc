import React from "react";
import Header from "components/common/Header";
import CategoryList from "components/Main/CategoryList";

const getCategoryData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/con-category1s`, {
    cache: "force-cache",
  });
  const data = await res.json();
  const { conCategory1s } = data;
  return conCategory1s;
};

const Category = async () => {
  const categories = await getCategoryData();

  return (
    <>
      <Header title="니콘내콘" icon="menu" />
      <CategoryList categories={categories} />
    </>
  );
};

export default Category;
