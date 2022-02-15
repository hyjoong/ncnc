import React from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { getBrand } from "api/api";
import BrandList from "components/Brand/BrandList";
import { CategoryData } from "types";
import Header from "components/common/Header";
import BrandHeader from "components/Brand/BrandHeader";

interface IProps {
  brands: CategoryData[];
  title: string;
}
const Brand = ({ brands, title }: IProps) => {
  console.log(title);
  return (
    <Wrapper>
      <Header title={title} />
      <BrandHeader />
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
  const { params } = context.params;
  const id = context.params.id;
  const response = await getBrand(Number(id));

  return {
    props: {
      brands: response.conCategory1.conCategory2s,
      title: response.conCategory1.name,
    },
  };
};
