import React from "react";
import styled from "styled-components";
import { ProductItem } from "types";

interface IProps {
  item: any;
}

const ItemDetail = ({ item }: IProps) => {
  console.log("hi 유의", item);
  return (
    <DetailContainer>
      <DetailTitle>브랜드 별 유의사항</DetailTitle>
      <DetailInfo>{item.conCategory2.info}</DetailInfo>
      <DetailInfo>{item.warning}</DetailInfo>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled.span`
  margin: 10px 0;
`;

const DetailInfo = styled.span`
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 1.5;
  color: #999;
  margin-bottom: 2rem;
`;

const DetailSubTitle = styled.span``;

const DetailWarning = styled.span``;
export default ItemDetail;
