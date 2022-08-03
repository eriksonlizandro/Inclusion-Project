import React  from 'react';

// Local Modules
import { TopMenuStyled } from './styles';

const TopMenu = (props) => (
  <>
    <TopMenuStyled {...props}>
      {props.children}
    </TopMenuStyled>
  </>

);

export default TopMenu;