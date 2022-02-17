import React from "react";
import { getCategory } from "api/api";

const BrandHeader = ({ categories }: any) => {
  return <div></div>;
};

export const getStaticProps = async () => {
  const data = await getCategory();
  return {
    props: {
      categories: data,
    },
  };
};

export default BrandHeader;
