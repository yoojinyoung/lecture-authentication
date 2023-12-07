import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Logo to="/">인증 연습하기</Logo>
      <Controls>
        <Button to={"/login"}>로그인하기</Button>
        <Button to={"/signup"}>회원가입하기</Button>
      </Controls>
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

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const Button = styled(Link)`
  background-color: white;
  border: 1px solid black;
  padding: 0.5rem 1.5rem;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  &:visited {
    color: black;
  }
  &:hover {
    background-color: #ccc;
  }
`;

export default Header;
