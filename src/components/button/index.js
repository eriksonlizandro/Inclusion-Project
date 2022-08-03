import React  from 'react';

// Styles
import { ButtonStyled } from './styles';

const Button = (props)=> (
  <ButtonStyled {...props}>
    {props.children}
  </ButtonStyled>
);

export default Button;
