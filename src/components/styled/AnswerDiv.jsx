import styled from 'styled-components';

export const AnswerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
