import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  // for the current tag only
  color: red;
  font-size: 64px;

  // &:hover - pseudo classes

  div {
    // for tags inside
    color: blue;
  }
`;

function Div(props) {
  return <StyledDiv>{props.children}</StyledDiv>;
}

export default Div;
