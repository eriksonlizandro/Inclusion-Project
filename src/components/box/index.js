import React  from 'react';

// Local Modules
import { BoxStyled } from './styles';

const Box = (props) => (
  <>
    <BoxStyled {...props}>
      {props.children}
    </BoxStyled>
  </>

);

export default Box;