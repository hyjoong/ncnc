import React from "react";
import styled from "styled-components";
import Header from "components/common/Header";
import { GetServerSideProps } from "next";
import { getProductList, getBrandTitle } from "api/api";
import ListContainer from "components/itemList/listContainer";
import { BrandType } from "types";
import SEOHeader from "hooks/SEOHeader";

interface IProps {
  items: BrandType;
  title: string;
}

const ItemList = ({ items, title }: IProps) => {
  return (
    <>
      <SEOHeader
        title={`${title}`}
        description={`${items.conItems[0].name}.information}`}
        imageUrl={`${items.conItems[0].imageUrl}`}
        siteUrl={`https://ncnc.vercel.app/itemlist`}
      />
      <Wrapper>
        <Header title={title} />
        <ListContainer items={items} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await getBrandTitle(Number(id));
  const response = await getProductList(Number(id));

  return {
    props: {
      title: res.conCategory2.name,
      items: response,
    },
  };
};

export default ItemList;
