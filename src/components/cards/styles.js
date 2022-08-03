import styled from "styled-components";

export const CardStyled = styled.div`
  padding-top        : 10px;
  min-height         : 200px;
  max-width          : 285px;
  background-color   : #313537;
  box-shadow         : 0px 5px 17px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow : 0px 5px 17px 0px rgba(0,0,0,0.75);
  -moz-box-shadow    : 0px 5px 17px 0px rgba(0,0,0,0.75);

  &:hover {
    transform: translateY(-5px);
  };
`;