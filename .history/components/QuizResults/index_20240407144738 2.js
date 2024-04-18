import React from 'react';
import styles from "./QuizResults.module.css";
import Header from "@/components/Header/index.js";

export default function QuizResults({ correctAnswersTotal, questionCount, onRestart }) {
  return (
    <div className={styles.resultScreen}>
      <Header title="Quiz Complete!" />
      <div className={styles.scoreContainer}>
        <h1>Complete!</h1>
        <div className={styles.scoreCircle}>
          <p className={styles.score}>{correctAnswersTotal}</p>
        </div>
        <p>{correctAnswersTotal} out of {questionCount} questions correct</p>
        <p>You earned {correctAnswersTotal * 5} points!</p>
        <button className={styles.anotherQuizButton} onClick={onRestart}>Take Another Quiz</button>
        <button className={styles.homeButton} onClick={onRestart}>Return Home</button>
      </div>
    </div>
  );
}
