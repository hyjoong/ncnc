import React from "react";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import { getBrand } from "api/api";
import { GetServerSideProps } from "next";
import BrandList from "components/CafeBrand/BrandList";
import { CategoryListType, CategoryData } from "types";
import Header from "components/common/Header";

interface IProps {
  brands: CategoryData[];
  title: string;
}
const Brand = ({ brands, title }: IProps) => {
  console.log(title);
  return (
    <Wrapper>
      <Header title={title} />
      <BrandList brands={brands} />
    </Wrapper>
  );
};

export default Brand;

const Wrapper = styled.div`
  max-width: 375px;
  padding-bottom: 5rem;
  margin: 0 auto;
  background-color: #f1f3f4;
`;
export const getServerSideProps: GetServerSideProps = async (context) => {
  //const { id } = router.query;
  const { params } = context.params;
  console.log(params);
  const id = context.params.id;
  console.log(id);
  const response = await getBrand(Number(id));

  return {
    props: {
      brands: response.conCategory1.conCategory2s,
      title: response.conCategory1.name,
    },
  };
};
