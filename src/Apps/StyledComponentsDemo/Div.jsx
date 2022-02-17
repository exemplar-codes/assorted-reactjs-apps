import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  // for the current tag only
  // color: red;
  font-size: 64px;

  // &:hover - pseudoclasses

  div {
    // for tags inside
    color: blue;
    font-size: 24px;
  }
`;

function Div(props) { 
  return <StyledDiv>{props.children}</StyledDiv>;
}

export default Div;
