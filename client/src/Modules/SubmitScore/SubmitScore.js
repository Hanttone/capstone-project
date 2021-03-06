import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import {
  useSetNewHighScore,
  useResetGame,
} from 'Services/Context';
import { useHistory } from 'react-router-dom';
import postScores from 'Services/postScores';
import PropTypes from 'prop-types';

import Button from 'Components/Button/Button';
import Header from 'Components/Header/Header';

export default function SubmitScore({
  playerScore,
}) {
  const resetGame = useResetGame();

  const [
    isScoreSubmitted,
    setIsScoreSubmitted,
  ] = useState(false);

  const [
    isButtonDisabled,
    setIsButtonDisabled,
  ] = useState(false);

  const [playerInfo, setPlayerInfo] = useState({
    playerName: '',
    score: playerScore,
  });

  const setNewHighScore = useSetNewHighScore();
  const history = useHistory();

  useEffect(
    () =>
      setIsButtonDisabled(
        validateName(playerInfo.playerName)
      ),
    [playerInfo]
  );

  function handleChange(event) {
    const fieldValue = event.target.value;
    setPlayerInfo({
      ...playerInfo,
      [event.target.name]: fieldValue,
    });
  }

  function handleClick() {
    resetGame(3, 0);
    history.push('/highscore');
  }

  function onSubmit(event) {
    event.preventDefault();
    if (validateName(playerInfo.playerName)) {
      postScores(playerInfo);
    }
    setNewHighScore(playerInfo);
    setIsScoreSubmitted(true);
  }

  return (
    <HighScoreWrapper>
      {isScoreSubmitted ? (
        <>
          <p>Your score was submitted</p>
          <Button
            width="80%"
            radius="28px"
            text="High Scores"
            onPlayerClick={handleClick}
          />
        </>
      ) : (
        <>
          <Header mt="5vh">High Score!</Header>
          <Header>{playerScore}</Header>
          <label htmlFor="playerName">
            Enter your player name:
            {isButtonDisabled ? null : (
              <span>
                (between 1-15 carachters)
              </span>
            )}
            <input
              type="text"
              name="playerName"
              id="playerName"
              onChange={handleChange}
              value={playerInfo.playerName}
            />
          </label>
          <Button
            width="80%"
            radius="28px"
            text="Submit"
            disabled={!isButtonDisabled}
            onPlayerClick={onSubmit}
          />
        </>
      )}
    </HighScoreWrapper>
  );
}

const validateName = (name) =>
  name.length > 0 && name.length < 15;

SubmitScore.propTypes = {
  playerScore: PropTypes.number,
};

const HighScoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2vh;
  width: 100%;

  margin-bottom: 2vh;

  label {
    width: 80%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    text-align: center;
    font-size: 1.25rem;
  }

  span {
    font-size: 0.6rem;
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    color: red;
  }

  input {
    height: 8vh;
    margin-top: 2vh;
    margin-bottom: 1vh;

    border-radius: 28px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

    color: black;
    text-align: center;
    font-size: 1.25rem;
  }

  p {
    margin-top: 30vh;
    margin-bottom: 2vh;
    font-size: 1.2rem;
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
`;
