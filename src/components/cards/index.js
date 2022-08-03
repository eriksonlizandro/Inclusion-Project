import React  from 'react';

// Local Modules
import { CardStyled } from './styles';

const Card = (props) => (
  <>
    <CardStyled {...props}>
      {props.children}
    </CardStyled>
  </>
);

export default Card;
