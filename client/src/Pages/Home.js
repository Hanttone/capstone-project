import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import Ripples from 'react-ripples';

import Navigation from '../Components/Navigation/Navigation';
import Header from '../Components/Header/Header';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Button from '../Components/Button/Button';

export default function Home() {
  const history = useHistory();

  function handleClick() {
    history.push('/game');
  }

  return (
    <HomeWrapper>
      <Navigation />
      <Header mt="118px">Der, die & das</Header>
      <p>Want to practice the German nouns?</p>
      <p>
        Look no further, click on the play button
        and your game will start.
      </p>
      <p>You have 3 lives, have fun!</p>
      <ButtonWrapper>
        <div>
          <Ripples during={1200}>
            <Button
              width="80%"
              radius="28px"
              text="Play"
              onPlayerClick={handleClick}
            />
          </Ripples>
        </div>
      </ButtonWrapper>
      <WaveDesignBackground
        animate={true}></WaveDesignBackground>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  position: relative;

  p {
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 20px;
    margin-bottom: 3vh;
    width: 80%;
    z-index: 2;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 43px;
  z-index: 1;

  div {
    width: 100%;
    border-radius: 28px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
`;
