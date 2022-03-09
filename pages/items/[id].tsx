import React from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { getProductDetail } from "api/api";
import ItemContainer from "components/Item/ItemContainer";
import Header from "components/common/Header";
import { DetailType } from "types/detail";
import SEOHeader from "hooks/SEOHeader";

interface IProps {
  item: DetailType;
}

const Items = ({ item }: IProps) => {
  return (
    <>
      <SEOHeader
        title={`${item.name}`}
        description={`${item.information}`}
        imageUrl={`${item.imageUrl}`}
        siteUrl={`https://ncnc.vercel.app/items/${item.id}}`}
      />
      <Wrapper>
        <Header title="" />
        <ItemContainer item={item}></ItemContainer>
      </Wrapper>
    </>
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
