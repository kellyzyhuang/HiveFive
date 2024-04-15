import styles from "./QuizPopup.module.css";

export default function QuizPopup({ isCorrect, answer, onNextQuestion }) {
  const popupContentClass = isCorrect ? "correctBackground" : "incorrectBackground";

  return (
    <div className={styles.popup}>  
      <div className={`${styles.popupContent} ${styles[popupContentClass]}`}>
        <span onClick={onNextQuestion}></span>
        <p className={isCorrect ? styles.correct : styles.incorrect}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </p>
        <p className={styles.correctAnswer}>{isCorrect ? '' : `The correct answer is ${answer}!`}</p>
        <button className={styles.nextButton} onClick={onNextQuestion}>Next</button>
      </div>
    </div>
  );
}


