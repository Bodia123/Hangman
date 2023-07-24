import React from 'react';
import { useSelector } from 'react-redux';
import UaRules from './Language/UaRules';
import EngRules from './Language/EngRules';

function Rules() {
  const language = useSelector(state => state.language.value);
  return <>{language ? <UaRules /> : <EngRules />}</>;
}

export default Rules;
