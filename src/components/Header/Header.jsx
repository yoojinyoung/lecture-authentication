import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authActions } from "../../redux/slices/auth.slice";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const { logOut } = authActions;

  const handleClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <Logo to="/">인증 연습하기</Logo>
      <Controls>
        {isLoggedIn ? (
          <>
            <Button onClick={handleClickLogOut}>로그아웃</Button>
          </>
        ) : (
          <>
            <LinkButton to={"/log-in"}>로그인</LinkButton>
            <LinkButton to={"/sign-up"}>회원가입</LinkButton>
          </>
        )}
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

const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 0.5rem 1.5rem;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

const LinkButton = styled(Link)`
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
