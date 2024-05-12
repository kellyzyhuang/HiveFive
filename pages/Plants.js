import styles from "@/styles/Plants.module.css";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import MatchingResults from "@/components/MatchingResults";
import { plantsAnswers } from "@/data/incorrectInventory";

export default function Plants() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [matchingComplete, setMatchingComplete] = useState(false);

  const clickImage = (plantName) => {
    setSelectedPlant(plantName);
    setMatchingComplete(true);
  };

  if (matchingComplete) {
    return <MatchingResults selectedPlant={selectedPlant} />;
  }

  const halfLength = Math.ceil(plantsAnswers.answers.length / 2);
  const firstHalf = plantsAnswers.answers.slice(0, halfLength);
  const secondHalf = plantsAnswers.answers.slice(halfLength);

  return (
    <>
      <main className={`${styles.main}`}>
        <Header title="Matching" backImage="/images/back.svg" link="/" />
        <div className={styles.screen}>
          <div className={styles.heading}>
            <h4>Plants</h4>
            <p>Select the honey bee’s favorite flower, Zinnia.</p>
          </div>
          <div className={styles.plantImages}>
            {firstHalf.map((answers) => (
              <div key={answers.name} onClick={() => clickImage(answers.name)}>
                <Image src={answers.image} alt={answers.alt} width={166} height={160} />
              </div>
            ))}
          </div>
          <div className={styles.plantImages}>
            {secondHalf.map((answers) => (
              <div key={answers.name} onClick={() => clickImage(answers.name)}>
                <Image src={answers.image} alt={answers.alt} width={166} height={160} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}