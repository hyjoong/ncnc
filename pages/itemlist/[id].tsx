import React from "react";
import styled from "styled-components";
import Header from "components/common/Header";
import { GetServerSideProps } from "next";
import { getProductDetail, getBrandTitle } from "api/api";
import ListContainer from "components/itemList/listContainer";
import { BrandItem } from "types";

interface IProps {
  items: BrandItem[];
  title: string;
}

const ItemList = ({ items, title }: IProps) => {
  return (
    <Wrapper>
      <Header title={title} />
      <ListContainer items={items} />
    </Wrapper>
  );
};

export default ItemList;

const Wrapper = styled.div`
  max-width: 627px;
  height: 1000px;
  padding-bottom: 5rem;
  margin: 0 auto;
  background-color: white;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id;
  const res: any = await getBrandTitle(Number(id));
  const response: any = await getProductDetail(Number(id));

  return {
    props: {
      title: res.conCategory2.name,
      items: response.conItems,
    },
  };
};
