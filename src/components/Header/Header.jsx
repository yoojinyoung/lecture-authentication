import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Logo>인증 연습하기</Logo>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid black;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Logo = styled.strong`
  font-size: 1.5rem;
  font-weight: 700;
`;

export default Header;
