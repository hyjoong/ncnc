import React from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { getProductDetail } from "api/api";
import { ProductItem } from "types";
import ItemContainer from "components/Item/ItemContainer";
import Header from "components/common/Header";

interface IProps {
  item: ProductItem;
}

const Items = ({ item }: IProps) => {
  return (
    <Wrapper>
      <Header title="" />
      <ItemContainer item={item}></ItemContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 627px;
  height: 1000px;
  padding-bottom: 5rem;
  margin: 0 auto;
  background-color: white;
`;

export default Items;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id;
  const response = await getProductDetail(Number(id));

  return {
    props: {
      item: response.conItem,
    },
  };
};