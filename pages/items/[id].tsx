import React from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { getProductDetail } from "api/api";
import ItemContainer from "components/Item/ItemContainer";
import Header from "components/common/Header";
import { DetailType } from "types/detail";

interface IProps {
  item: DetailType;
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
  height: 93vh;
  padding: 5rem 0;
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
