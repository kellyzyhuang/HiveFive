import { useState } from "react";
import { quiz } from '../data/inventory.js';
import Header from "@/components/Header/index.js";
import styles from "@/styles/Quiz.module.css";
import QuizResults from "@/components/QuizResults";
import QuizPopup from "@/components/QuizPopup"; 

export default function Quiz() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [popup, setPopup] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [correctAnswersTotal, setCorrectAnswersTotal] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const currentQuestion = quiz.questions[currentQuestionNumber];

  const displayAnswer = (option) => {
    const isCorrect = option == currentQuestion.answer;
    setIsCorrectAnswer(isCorrect);
    setPopup(true);
  
    if (isCorrect) {
      setPoints(points + 5);
      setCorrectAnswersTotal(correctAnswersTotal + 1);
    }
  };

  const keyTabbing = (option, event) => {
    if (event.key === "Enter") {
      displayAnswer(option);
    }
  };

  const nextQuestion = () => {
    setPopup(false); 
    const nextQuestionIndex = currentQuestionNumber + 1;
    
    if (nextQuestionIndex < quiz.questions.length) {
      setCurrentQuestionNumber(nextQuestionIndex);
    } else {
      setQuizComplete(true); 
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionNumber(0);
    setCorrectAnswersTotal(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return <QuizResults 
             correctAnswersTotal={correctAnswersTotal} 
             questionCount={quiz.questions.length}
             onRestart={restartQuiz}
            />;
  }; 

  return (
    <>
      <div className={styles.screen}>
        <Header title="Quiz" backImage="/images/x.svg" link="/" exit className={styles.exitIcon}/>
        <div className={styles.buffer}></div>
        <div className={styles.progressBar}>
          <img className={styles.progress} src={currentQuestion.progress}/>
        </div>
        <div className={styles.questionHead}>
          <h1 className={styles.question}>{currentQuestion.question}</h1>
          <img className={styles.speaker} src={"/images/speaker_icon.svg"} width={1} height={1}/> 
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.gameBanner} src={currentQuestion.image}/> 
        </div>
        <div className={styles.optionContainer}>
          {currentQuestion.options.map((option, index) => (
            <div 
              key={index} 
              className={styles.option} 
              tabIndex={0} 
              onClick={() => displayAnswer(option)}
              onKeyDown={(event) => keyTabbing(option, event)}
            >
              <p>{index + 1}. {option}</p>
            </div>
          ))}
        </div>
        {popup && (
          <QuizPopup 
            isCorrect={isCorrectAnswer}
            answer={currentQuestion.answer}
            onNextQuestion={nextQuestion}
          />
        )}
        <img className={styles.microphone} src={"/images/mic_icon.svg"} width={1} height={1}></img> 
      </div>
    </>
  );
}
