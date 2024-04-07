import styles from './QuizPopup.module.css'; 

export default function QuizPopup({ isCorrect, answer, onNextQuestion }) {
  
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <span onClick={onNextQuestion}></span>
        <p className={isCorrect ? styles.correct : styles.incorrect}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </p>
        <p>{isCorrect ? '' : `The correct answer is: ${answer}`}</p>
        <button className={styles.nextButton} onClick={onNextQuestion}>Next</button>
      </div>
    </div>
  );
}

