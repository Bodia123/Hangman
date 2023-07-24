import React from 'react';

import { useSelector } from 'react-redux';
import UaHeader from './Languages/UaHeader';
import EngHeader from './Languages/EngHeader';

function Header() {
  const language = useSelector(state => state.language.value);
  return <>{language ? <UaHeader /> : <EngHeader />}</>;
}

export default Header;
