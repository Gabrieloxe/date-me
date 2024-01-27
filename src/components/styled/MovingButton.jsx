import styled, { keyframes } from 'styled-components';

const moveToPosition = keyframes`

  to {
    transform: translate(
        ${(props) => props.leftInput}px,
        ${(props) => props.topInput}px
    );
  }
`;

export const MovingButton = styled.button`
  font-family: 'Press Start 2P', cursive;
  transition: 0.5s;
  animation: ${moveToPosition} 0.5s ease;
`;
