import { useState } from "react";
{/*import { quiz } from './data/inventory.js'; */}
import Header from "@/components/Header/index.js";
import styles from "@/styles/Quiz.module.css"

export default function Quiz() {
  return(
    <>
      
      <div className={styles.screen}>
        <Header title="Quiz"/>
        <div className={styles.buffer}></div>
        <div className={styles.questionHead}>
          <h1 className={styles.question} >Question</h1>
          <img className={styles.speaker}/>
        </div>
        <img className={styles.gameBanner}/>
        <div className={styles.optionContainer}>
          <div className={styles.option}><p>1.</p></div>
          <div className={styles.option}><p>2.</p></div>
          <div className={styles.option}><p>3.</p></div>
          <div className={styles.option}><p>4.</p></div>
        </div>
        <img className={styles.microphone}></img>
      </div>
    </>
  )
}