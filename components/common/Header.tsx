import React from "react";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

interface IProps {
  title?: string;
  icon: string;
}

const Header = ({ title, icon }: any) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <HeaderWrapper>
      {icon ? (
        <MenuButton>{icon}</MenuButton>
      ) : (
        <HeaderLeft onClick={handleBack}>◀</HeaderLeft>
      )}

      <HeaderTitle>{title}</HeaderTitle>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: white;
`;

const MenuButton = styled.button``;

const HeaderLeft = styled.button`
  font-weight: 600;
`;

const HeaderTitle = styled.div`
  font-weight: 600;
`;

const HeaderRight = styled.div``;

export default Header;
