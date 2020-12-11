import styled from 'styled-components/macro';
import { useEffect, useRef } from 'react';
import {
  useCounter,
  useSetCounter,
} from '../../Services/Context';
import { motion } from 'framer-motion';

export default function TimerBar({ word }) {
  const countDown = useCounter();
  const setCounter = useSetCounter();
  const timer = useRef();

  function setTimer() {
    if (countDown > 0) {
      setCounter(countDown - 1);
    }
  }

  useEffect(() => {
    timer.current = setTimeout(
      () => setTimer(),
      1000
    );
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDown]);

  useEffect(() => {
    setCounter(15);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  return (
    <TimerWrapper>
      <div>
        <motion.div
          animate={{
            width: `${countDown * 21}px`,
            backgroundImage: `linear-gradient(-45deg, ${(
              props
            ) => props.theme.colorDarkButton},${(
              props
            ) =>
              props.theme.colorVeryLightButton})`,
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
          }}></motion.div>
      </div>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  margin-bottom: 4vh;
  z-index: 20;

  div {
    width: 315px;
    height: 11px;
    background-color: rgba(192, 192, 192, 0.3);
    border-radius: 5px;
  }
`;
