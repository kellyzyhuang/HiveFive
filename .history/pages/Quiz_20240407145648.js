import { useState } from "react";
import { quiz } from '../data/inventory.js';
import Header from "@/components/Header/index.js";
import styles from "@/styles/Quiz.module.css";
import QuizResults from "@/components/QuizResults";
import QuizPopup from "@/components/QuizPopup"; 
import Head from "next/head.js";

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
      <Head>
        <title>Hive Five</title>
        <meta name="description" content="Save the bees one question at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400..900;1,400..900&family=Lexend:wght@100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.screen}>
        <Header title="Quiz"/>
        <div className={styles.buffer}></div>
        <div className={styles.questionHead}>
          <h1 className={styles.question}>{currentQuestion.question}</h1>
          <img className={styles.speaker}/> 
        </div>
        <img className={styles.gameBanner}/> 
        <div className={styles.optionContainer}>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className={styles.option} onClick={() => displayAnswer(option)}>
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
        <img className={styles.microphone}></img> 
      </div>
    </>
  );
}
