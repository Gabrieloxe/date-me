import React, { useState } from 'react';
import questions from '../../data/questions.json';
import { Question } from './Question';
import { GameButton } from '../styled/GameButton';

// if question is correct make the answer green

const NextPage = ({ onNextClicked, currentQuestion, setQuizComplete }) => {
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleNextClicked = () => {
    if (isLastQuestion) {
      setQuizComplete(true);
    } else {
      onNextClicked();
    }
  };

  // if the current question is the last question, make the button say finish
  return (
    <div style={{ padding: '10px 0 10px 10px' }}>
      <div style={{ color: 'green', marginBottom: '10px' }}>Correct!</div>
      <div style={{ marginBottom: '10px' }}>Click next to continue</div>
      <GameButton onClick={handleNextClicked}>
        {isLastQuestion ? 'Next Stage' : 'Next'}
      </GameButton>
    </div>
  );
};

export const Quiz = ({ setQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const onNextClicked = () => {
    setCurrentQuestion(currentQuestion + 1);
    setIsCorrect(false);
  };

  return (
    <div>
      {isCorrect ? (
        <NextPage
          onNextClicked={onNextClicked}
          currentQuestion={currentQuestion}
          setQuizComplete={setQuizComplete}
        />
      ) : (
        <Question
          question={questions[currentQuestion]}
          setIsCorrect={setIsCorrect}
        />
      )}
    </div>
  );
};
