import styles from "./MatchingResults.module.css";
import React from "react";
import Header from "@/components/Header";
import { plantsAnswers } from "@/data/incorrectInventory";
import Image from "next/image";
import Link from "next/link";

export default function Results({ selectedPlant }) {
  const result = plantsAnswers.answers.find((plant) => plant.name === selectedPlant);

  return (
    <>
    <main className={`${styles.main}`}>
      <Header title="Matching" backImage="/images/back.svg" link="/" />
      <div className={styles.screen}>
        {result && (
          <div className={styles.result}>
            <h1>{result.tagline}</h1>
            <p>{result.headline}</p>
            <p>{result.description}</p>
            <Image src={result.photo} alt={result.alt} width={166} height={160}/>
          </div>
        )}
      </div>
      <button className={styles.endangered}><Link href="/Species">Match Endangered Species</Link></button>
      <button className={styles.tryAgain}><Link href="/Matching">Try Again</Link></button>
    </main>
    </>
  );
}