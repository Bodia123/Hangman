import React from 'react';
import { useSelector } from 'react-redux';
import UaScore from './Language/UaScore';

import EngScore from './Language/EngScore';

function Score() {
  const language = useSelector(state => state.language.value);
  return <>{language ? <UaScore /> : <EngScore />}</>;
}

export default Score;
