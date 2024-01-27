import React from 'react';
import { AnswerDiv } from '../styled/AnswerDiv';
import { GameButton } from '../styled/GameButton';

export const Question = ({ question, setIsCorrect }) => {
  const answerbuttonClicked = (e) => {
    if (e.target.value === 'true') {
      setIsCorrect(true);
    } else {
      // make button red for 1 second
      e.target.style.backgroundColor = 'red';
      setTimeout(() => {
        e.target.style.backgroundColor = 'white';
      }, 1000);
    }
  };
  // map through the answer options and create a button for each one
  const answerOptions = question.answerOptions.map((answerOption) => (
    <div key={answerOption.answerText} style={{ margin: '10px' }}>
      <GameButton onClick={answerbuttonClicked} value={answerOption.isCorrect}>
        {answerOption.answerText}
      </GameButton>
    </div>
  ));

  return (
    <div>
      <div>{question.questionText}</div>
      <AnswerDiv>{answerOptions}</AnswerDiv>
    </div>
  );
};
