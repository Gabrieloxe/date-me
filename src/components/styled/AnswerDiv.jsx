import styled from 'styled-components';

export const AnswerDiv = styled.div`
  font-family: 'Press Start 2P', cursive;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
