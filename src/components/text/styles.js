import styled from "styled-components";

export const TextStyled = styled.div`
  width           : ${({ width }) => width || 'auto'};
  color           : ${({ color }) => color};
  letter-spacing  : ${({ letterSpacing }) => letterSpacing || null };
  font-weight     : ${({ fontWeight }) => fontWeight || null };
  font-size       : ${({ fontSize }) => fontSize || null };
  font-family     : ${({ fontFamily }) => fontFamily || '"Gill Sans Extrabold", Helvetica, sans-serif'} ;
  line-height     : ${({ lineHeight }) => lineHeight || null };
  margin-left     : ${({ ml }) => ml || null };
  margin-right    : ${({ mr }) => mr || null };
  margin-top      : ${({ mt }) => mt || null };
  margin-bottom   : ${({ mb }) => mb || null };
  padding-left    : ${({ pl }) => pl || null };
  padding-right   : ${({ pr }) => pr || null };
  padding-top     : ${({ pt }) => pt || null };
  padding-bottom  : ${({ pb }) => pb || null };
  text-align      : ${({ textAlign }) => textAlign || null };
  justify-self    : ${({ justifySelf }) => justifySelf || null };
`
