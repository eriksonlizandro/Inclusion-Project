import styled from "styled-components";

export const ButtonStyled = styled.button`
  position         : ${({ position }) => position || 'relative'};
  height           : ${({ height }) => height};
  align-items      : center;
  justify-items    : center;
  justify-content  : center;
  overflow         : hidden;
  justify-content  : ${({ justifyContent }) => justifyContent};
  border-radius    : ${({ borderRadius }) => borderRadius};
  background-color : ${({ bgColor }) => bgColor};
  border           : ${({ border }) => border};
  padding          : ${({ padding }) => padding};
  opacity          : ${({ $loading, disabled }) => $loading || disabled ? 0.7 : 1};
  cursor           : ${({ $loading, disabled }) => $loading || disabled ? 'not-allowed' : 'pointer'};
  width            : ${({ width }) => width};
  min-width        : ${({ minWidth }) => minWidth || 'unset'}; 
  margin-left      : ${({ ml }) => ml || null };
  margin-right     : ${({ mr }) => mr || null };
  margin-top       : ${({ mt }) => mt || null };
  margin-bottom    : ${({ mb }) => mb || null };
  padding-left     : ${({ pl }) => pl || null };
  padding-right    : ${({ pr }) => pr || null };
  padding-top      : ${({ pt }) => pt || null };
  padding-bottom   : ${({ pb }) => pb || null };
  top              : ${({ top })  => top || null };
  bottom           : ${({ bottom })  => bottom || null };
  right            : ${({ right }) => right || null };
  left             : ${({ left }) => left || null };

  &.boxShadow {
    box-shadow : rgb(0 7 45 / 15%) 0px 1px 0px 0px;
  }

  &.color-change:hover {
    background-color : ${({ hoverColor }) => hoverColor};
    transition       : ${({ transition }) => transition};
  }

  &.zoom-in {
    transition : all 200ms linear;
  }

  &.zoom-in:hover {
    transform : scale(1.05);
  }

  &.round-button{
    padding       : 12px 20px 12px 20px;
    border-radius : 50px;
  }

  /* Button Variations */
  &.dash-activate {
    display             : flex;
    height              : auto;
    padding             : 5px 15px 5px 15px;
    background-color    : rgb(255, 202, 139);
    box-shadow          : black 1px 1px 3px 0px;
    transition          : background-color 200ms linear;
  }

  &.filter-pill {
    height        : auto;
    padding       : 8px 15px 8px 15px;
    border-style  : solid;
    border-width  : 1px;
    border-color  : rgba(130, 134, 153, 0.2);
    border-radius : 4px;
  }

  &.square-button {
    padding       : ${({ padding })=> padding || '16px 24px 14px'};
    border-radius : 4px;
    height        : auto;
  }
 
`;
