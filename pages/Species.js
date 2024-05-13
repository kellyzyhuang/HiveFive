import styles from "@/styles/Species.module.css";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import SpeciesResults from "@/components/SpeciesResults/SpeciesResults";
import { speciesAnswers } from "@/data/spciesInventory";

export default function Species() {
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [matchingComplete, setMatchingComplete] = useState(false);

  const clickImage = (speciesName) => {
    setSelectedSpecies(speciesName);
    setMatchingComplete(true);
  };

  if (matchingComplete) {
    return <SpeciesResults selectedSpecies={selectedSpecies} />;
  }

  const halfLength = Math.ceil(speciesAnswers.answers.length / 2);
  const firstHalf = speciesAnswers.answers.slice(0, halfLength);
  const secondHalf = speciesAnswers.answers.slice(halfLength);

  return (
    <>
      <main className={`${styles.main}`}>
        <Header title="Matching" backImage="/images/back.svg" link="/" />
        <div className={styles.screen}>
          <div className={styles.heading}>
            <h4>Endangered Species</h4>
            <p>Select the Western Bumblebee.</p>
          </div>
          <div className={styles.images}>
            <div className={styles.speciesImages}>
              {firstHalf.map((answers) => (
                <div key={answers.name} onClick={() => clickImage(answers.name)}>
                  <Image src={answers.image} alt={answers.alt} width={166} height={160} />
                </div>
              ))}
            </div>
            <div className={styles.speciesImages}>
              {secondHalf.map((answers) => (
                <div key={answers.name} onClick={() => clickImage(answers.name)}>
                  <Image src={answers.image} alt={answers.alt} width={166} height={160} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}