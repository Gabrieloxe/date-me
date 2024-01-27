import React from 'react';
import { MovingButton } from './styled/MovingButton';

export const Button = ({
  id,
  text,
  leftInput,
  topInput,
  heightInput,
  widthInput,
  onclick,
  positionInput,
  fontSizeInput,
  onmouseover,
}) => {
  const buttonStyle = {
    position: positionInput,
    borderRadius: '5px',
    height: heightInput ? `${heightInput}px` : '50px',
    width: widthInput ? `${widthInput}px` : '100px',
    left: leftInput ? `${leftInput}px` : '0px',
    top: topInput ? `${topInput}px` : '0px',
    fontSize: fontSizeInput ? `${fontSizeInput}px` : '20px',
  };
  return (
    <MovingButton
      id={id}
      style={buttonStyle}
      onClick={onclick}
      onMouseOver={onmouseover}
    >
      {text}
    </MovingButton>
  );
};
