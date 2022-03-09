import React from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { getBrand } from "api/api";
import BrandList from "components/Brand/BrandList";
import { BrandType } from "types";
import Header from "components/common/Header";
import SEOHeader from "hooks/SEOHeader";

interface IProps {
  brands: BrandType[];
  title: string;
}
const Brand = ({ brands, title }: IProps) => {
  console.log("title", title), console.log("brad", brands);
  return (
    <>
      {
        <SEOHeader
          title={`${title}`}
          description={`${brands[0].name},${brands[1].name},${brands[2].name},${brands[3].name}..`}
          imageUrl={`${brands[0].imageUrl}`}
          siteUrl={`https://ncnc.vercel.app/brand`}
        />
      }
      <Wrapper>
        <Header title={title} />
        <BrandList brands={brands} />
      </Wrapper>
    </>
  );
};

export default Brand;

const Wrapper = styled.div`
  padding-top: 5rem;
  max-width: 627px;
  height: 93vh;
  padding-bottom: 5rem;
  margin: 0 auto;
  background-color: #f1f3f4;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id;
  const response = await getBrand(Number(id));

  return {
    props: {
      brands: response.conCategory1.conCategory2s,
      title: response.conCategory1.name,
    },
  };
};
