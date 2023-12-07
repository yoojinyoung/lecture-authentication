import React from "react";
import styled from "styled-components";

function Page({ title, children }) {
  return (
    <Wrapper>
      <PageTitle>{title}</PageTitle>
      <div>{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 2rem 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
`;

const PageTitle = styled.h1`
  margin-bottom: 2rem;
`;

export default Page;
