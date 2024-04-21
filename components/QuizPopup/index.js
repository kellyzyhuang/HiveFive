import React, { useEffect, useState } from 'react';
import styles from "./QuizPopup.module.css";

export default function QuizPopup({ isCorrect, answer, onNextQuestion }) {
  const [showCorrectAnswerPopup, setShowCorrectAnswerPopup] = useState(false);
  const popupContentClass = isCorrect ? "correctBackground" : "incorrectBackground";
  const icon = isCorrect ? "/images/correct.svg" : "/images/incorrect.svg";

  useEffect(() => {
    if (!isCorrect) {
      setShowCorrectAnswerPopup(true);
      const timer = setTimeout(() => {
        setShowCorrectAnswerPopup(false);
      }, 50000); 

      return () => clearTimeout(timer); 
    } else {
      setShowCorrectAnswerPopup(false);
    }
  }, [isCorrect]); 

  return (
    <div className={styles.popup}>
      <div className={`${styles.popupContent} ${styles[popupContentClass]}`}>
        <div className={styles.icon}>
          <img src={icon} alt={isCorrect ? "Correct" : "Incorrect"} />
        </div>
        <p className={isCorrect ? styles.correct : styles.incorrect}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </p>
        <button className={styles.nextButton} onClick={onNextQuestion}>Next</button>
        <img src="/images/arrow.svg" alt="arrow" className={styles.arrow}/>
      </div>
      {showCorrectAnswerPopup && (
        <div className={styles.correctAnswerPopup}>
          <img src="/images/happy_bee.svg" alt="beenard" className={styles.beenard}/>
          <p>The correct answer is {answer}!</p>
        </div>
      )}
    </div>
  );
}
