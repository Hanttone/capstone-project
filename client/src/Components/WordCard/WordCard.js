import styled from 'styled-components';

export default function WordCard({ word, text }) {
  return (
    <WordCardWrapper>
      <div></div>
      <p>{text}</p>
      <h2>{word}</h2>
    </WordCardWrapper>
  );
}

const WordCardWrapper = styled.section`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  z-index: 1;

  div {
    width: 87.5%;
    height: 23vh;
    grid-column: 1;
    grid-row: 1;
    border-radius: 28px;
    background-color: ${(props) =>
      props.theme.cardBackgroundColor};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  p {
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 8vh;
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  h2 {
    width: 80%;
    grid-column: 1;
    grid-row: 1;
    text-align: center;
    font-size: 1.5rem;
    overflow-wrap: break-word;
  }
`;
