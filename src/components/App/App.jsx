import GamePage from 'components/GamePage/GamePage';
import Header from 'components/Layout/Header';
import Rules from 'components/Rules/Rules';
import Score from 'components/Score/Score';
import StartPage from 'components/StartPage/StartPage';
import { Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </>
  );
};
