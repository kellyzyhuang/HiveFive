import { useState } from "react";
import { mathquiz } from '../data/math.js';
import Header from "@/components/Header/index.js";
import styles from "@/styles/MathQuiz.module.css";
import QuizResults from "@/components/QuizResults";
import QuizPopup from "@/components/QuizPopup"; 
import { useCorrectAnswers } from '../CorrectAnswersContext.js';

export default function Quiz() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [popup, setPopup] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [correctAnswersTotal, setCorrectAnswersTotal] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const currentQuestion = mathquiz.questions[currentQuestionNumber];
  const { updateCorrectAnswersTotal } = useCorrectAnswers();
  const [micPopupVisible, setMicPopupVisible] = useState(false);

  const speak = (text) => {
    const synth = window.speechSynthesis;
    if (synth) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }
  };

  const handleSpeakerClick = () => {
    speak(currentQuestion.question);
  };

  const handleSpeakerKeyDown = (event) => {
    if (event.key === "Enter") {
      speak(currentQuestion.question);
    }
  };

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
    
    if (nextQuestionIndex < mathquiz.questions.length) {
      setCurrentQuestionNumber(nextQuestionIndex);
    } else {
      setQuizComplete(true);
      updateCorrectAnswersTotal(correctAnswersTotal);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionNumber(0);
    setCorrectAnswersTotal(0);
    setQuizComplete(false);
  };

  const toggleMicPopup = () => {
    setMicPopupVisible(!micPopupVisible);
  };

  if (quizComplete) {
    return <QuizResults 
             correctAnswersTotal={correctAnswersTotal} 
             questionCount={mathquiz.questions.length}
             onRestart={restartQuiz}
            />;
  }

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
          <img 
            className={styles.speaker} 
            src={"/images/speaker_icon.svg"} 
            alt="Speak" 
            onClick={handleSpeakerClick} 
            tabIndex={0}
            onKeyDown={handleSpeakerKeyDown}
          />
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
        <button className={styles.microphone} onClick={toggleMicPopup}>
          <img className={styles.microphoneIcon} src={"/images/mic_icon.svg"} alt="Mic"/>
        </button>
        {micPopupVisible && (
          <div className={`${styles.overlay}`}>
            <div className={styles.popup}>
              <p>Allow the High Five app to access your device’s microphone?</p>
              <button className={styles.popUpButton} onClick={toggleMicPopup}>Once</button>
              <button className={styles.popUpButton} onClick={toggleMicPopup}>Always</button>
              <button className={styles.popUpButton} onClick={toggleMicPopup}>Never</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
