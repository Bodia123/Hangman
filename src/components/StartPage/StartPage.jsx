import React from 'react';
import { useSelector } from 'react-redux';
import UaStart from './Language/UaStart';
import EngStart from './Language/EngStart';

function StartPage() {
  const language = useSelector(state => state.language.value);
  return <>{language ? <UaStart /> : <EngStart />}</>;
}

export default StartPage;
