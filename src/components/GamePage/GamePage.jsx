import React from 'react';
import { useSelector } from 'react-redux';
import UaGame from './Language/UaFiles/UaGame';
import EngGame from './Language/EngFiles/EngGame';

function GamePage() {
  const language = useSelector(state => state.language.value);
  return <>{language ? <UaGame /> : <EngGame />}</>;
}

export default GamePage;
