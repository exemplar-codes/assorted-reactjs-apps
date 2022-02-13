import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  color: red;
  font-size: 64px;
`;

function Div(props) {
  <StyledDiv>{props.children}</StyledDiv>;
}

export default Div;
