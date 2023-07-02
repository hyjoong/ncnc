"use client";
import "./globals.css";
import styled from "styled-components";
import StyledJsxRegistry from "./registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledJsxRegistry>
          <LayoutStyled>
            <Content>{children}</Content>
          </LayoutStyled>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

const LayoutStyled = styled.div`
  background-color: #dddddd;
`;

const Content = styled.div`
  max-width: 627px;
  padding-top: 80px;
  margin: 0 auto;
  background-color: #f1f3f4;
`;
