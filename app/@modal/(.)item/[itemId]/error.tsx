"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Modal from "components/common/Modal";
import styled from "styled-components";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <Modal>
      <ErrorContainer>
        <h2>상품 데이터를 불러올 수 없습니다!</h2>
      </ErrorContainer>
    </Modal>
  );
}

const ErrorContainer = styled.div`
  width: 60vw;
  padding: 10px 30px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;

  h2 {
    color: #000000;
    font-weight: 600;
    font-size: 20px;
  }
`;
