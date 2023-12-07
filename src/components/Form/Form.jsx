import React from "react";
import styled from "styled-components";

function Form({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.form`
  display: grid;
  row-gap: 1rem;
  max-width: 240px;
`;

export default Form;
