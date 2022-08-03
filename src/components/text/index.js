import React  from 'react';

// Local Modules
import { TextStyled } from './styles';

const Text = (props) => (
  <>
    <TextStyled {...props}>
      {props.children}
    </TextStyled>
  </>
);

export default Text;
