import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  thumbnail: string;
  id: number;
  name: string;
  type?: string;
}

const CategoryItem = ({ thumbnail, id, name, type }: IProps) => {
  return (
    <Link href={`/${type}/${id}`}>
      <CategoryBox className="categoryBox">
        <Image
          src={thumbnail}
          width={40}
          height={40}
          alt='brand'
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
        <ItemName>{name}</ItemName>
      </CategoryBox>
    </Link>
  );
};
const CategoryBox = styled.div`
  border-radius: 5px;
  background-color: white;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ItemImg = styled.img`
  width: 40px;
`;

const ItemName = styled.div`
  margin-top: 12px;
  font-size: 0.7rem;
  font-weight: 600;
`;

export default CategoryItem;
