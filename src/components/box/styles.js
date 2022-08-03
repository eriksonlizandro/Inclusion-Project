import styled from "styled-components";

export const BoxStyled = styled.div`
box-sizing       : border-box;
display          : ${({ container }) =>  container ? 'flex' : 'block' };
flex-direction   : ${({ flexDirection }) => flexDirection || 'row' };
justify-content  : ${({ justifyContent }) => justifyContent || 'center' };
flex-grow        : ${({ flexGrow }) => flexGrow || 0 };
flex-basis       : ${({ flexBasis }) => flexBasis || 'auto' };
flex-shrink      : ${({ flexShrink }) => flexShrink || 1 };
flex-wrap        : ${({ flexWrap }) => flexWrap || 'nowrap' };
flex             : ${({ flex }) => flex || '0 1 auto' };
align-items      : ${({ alignItems }) => alignItems || 'center' };
margin           : ${({ margin }) =>  margin };
margin-left      : ${({ ml }) => ml || null };
margin-right     : ${({ mr }) => mr || null };
margin-top       : ${({ mt }) => mt || null };
margin-bottom    : ${({ mb }) => mb || null };
padding          : ${({ padding }) =>  padding };
padding-left     : ${({ pl }) => pl || null };
padding-right    : ${({ pr }) => pr || null };
padding-top      : ${({ pt }) => pt || null };
padding-bottom   : ${({ pb }) => pb || null };
width            : ${({ width }) => width || 'auto' };
height           : ${({ height }) => height || 'auto' };
max-width        : ${({ maxWidth }) => maxWidth || 'none' };
min-height       : ${({ minHeight }) => minHeight || 'none' };
position         : ${({ position }) => position || 'relative' };
background-color : ${({ bgColor }) => bgColor || 'inherit'};
`
