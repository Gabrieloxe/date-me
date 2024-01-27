'use client';
import React, { useState } from 'react';
import { MainQuestion } from '../components/MainQuestion';
import { Quiz } from '../components/Quiz/Quiz';
import { GameButton } from '../components/styled/GameButton';
import './page.module.css';

export default function Home() {
  const [start, setStart] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  if (!start) {
    return (
      <div className='App'>
        <header className='App-header' style={{ backgroundColor: 'pink' }}>
          <h2>Welcome to the game!</h2>
          <GameButton onClick={() => setStart(true)}>START</GameButton>
        </header>
      </div>
    );
  } else if (start && !quizComplete) {
    return (
      <div className='App'>
        <header className='App-header' style={{ backgroundColor: 'pink' }}>
          <Quiz setQuizComplete={setQuizComplete} />
        </header>
      </div>
    );
  }
  return (
    <div className='App'>
      <header className='App-header' style={{ backgroundColor: 'pink' }}>
        <MainQuestion />
      </header>
    </div>
  );
}
