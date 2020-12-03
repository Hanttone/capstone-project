/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import { usePlayerLives } from '../Services/Context';

import Navigation from '../Components/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import WordCard from '../Components/WordCard/WordCard';
import Scores from '../Components/Scores/Scores';
import Lives from '../Components/Lives/Lives';
import TimerBar from '../Components/TimerBar/TimerBar';

export default function GamePage({
  wordData,
  scoreData,
}) {
  const [
    selectedWord,
    setSelectedWord,
  ] = useState('');
  const [
    correctAnswer,
    setCorrectAnswer,
  ] = useState('');
  const [
    isAnswerDisplayed,
    setIsAnswerDisplayed,
  ] = useState(true);
  const [playerScore, setPlayerScore] = useState(
    0
  );
  const setPlayerLives = usePlayerLives();

  useEffect(() => randomWord(), []);

  function randomWord() {
    const randomNumber = Math.floor(
      Math.random() * wordData.length
    );
    const wordSelected =
      wordData[randomNumber].germanNoun;
    return setSelectedWord(wordSelected);
  }

  function handleClick(nounGender) {
    const index = wordData.findIndex(
      (word) => word.germanNoun === selectedWord
    );
    if (wordData[index].gender === nounGender) {
      setPlayerScore(playerScore + 5);
      randomWord();
    } else {
      const correctAnswer =
        wordData[index].gender;
      setCorrectAnswer(correctAnswer);
      setIsAnswerDisplayed(false);
      setPlayerLives(1);
      setTimeout(
        () => setIsAnswerDisplayed(true),
        3000
      );
      randomWord();
    }
  }

  return (
    <GameWrapper>
      <Navigation />
      <Header>Game</Header>
      <Scores
        myScore={playerScore}
        highScore={scoreData}></Scores>
      <Lives />
      <TimerBar word={selectedWord}></TimerBar>
      {isAnswerDisplayed ? (
        <WordCard word={selectedWord} />
      ) : (
        <WordCard
          text="The correct answer is:"
          word={correctAnswer}
        />
      )}
      <ButtonWrapper>
        <Button
          width="100%"
          radius="20px"
          text="Der"
          zindex="1"
          onPlayerClick={() =>
            handleClick('der')
          }></Button>
        <Button
          width="100%"
          radius="20px"
          text="Die"
          zindex="1"
          onPlayerClick={() =>
            handleClick('die')
          }></Button>
        <Button
          width="100%"
          radius="20px"
          text="Das"
          zindex="1"
          onPlayerClick={() =>
            handleClick('das')
          }></Button>
      </ButtonWrapper>
      <WaveDesignBackground />
    </GameWrapper>
  );
}

const GameWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ButtonWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3%;
  position: absolute;
  bottom: 60px;
  z-index: 1;
`;
