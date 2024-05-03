import Head from "next/head";
import Header from "@/components/Header";
import styles from '@/styles/Donations.module.css'; 
import NavBar from "@/components/NavBar";
import DoughnutChart from "@/components/DoughnutChart";
import { useCorrectAnswers } from '../CorrectAnswersContext';

export default function Donations() {
    const { correctAnswersTotal } = useCorrectAnswers();
  return(
    <>
    <Head>
        <title>Hive Five</title>
        <meta name="description" content="Save the bees one question at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
        <div className={styles.screen}>
        <Header title="Donations" backImage="/images/back.svg" link="/" />
            <div className={styles.buffer}></div>
            <h3 className={styles.graphHead}>Since Jan. 01, 2024</h3>
            <div className={styles.graph}>
                <div className={styles.circle}></div>
                <DoughnutChart/>
            </div>
            <div className={styles.circleTwo}><p>CAD ${(correctAnswersTotal * 5 / 100).toFixed(2)} Donated</p></div>
            <button className={styles.impact}>View Your Impact</button>
            <div className={styles.summaryList}>
                <p className={styles.summary}>Detailed Summary</p>
                <hr className={styles.underline}></hr>
            </div>
            <div className={styles.list}>
                <div className={styles.entry}>
                    <p>Mar 01</p>
                    <p>$3.50</p>
                </div>
                <div className={styles.entry}>
                    <p>Mar 01</p>
                    <p>$3.50</p>
                </div>
                <div className={styles.entry}>
                    <p>Mar 01</p>
                    <p>$3.50</p>
                </div>
                <div className={styles.entry}>
                    <p>Mar 01</p>
                    <p>$3.50</p>
                </div>
                <div className={styles.entry}>
                    <p>Mar 01</p>
                    <p>$3.50</p>
                </div>
                <div className={styles.entry}>
                    <p>Mar 01</p>
                    <p>$3.50</p>
                </div>
                <div className={styles.entry}>
                    <p>Mar 01</p>
                    <p>$3.50</p>
                </div>
                <div className={styles.entry}>
                    <p>Mar 01</p>
                    <p>$3.50</p>
                </div>
                <div className={styles.entry}>
                    <p>Mar 01</p>
                    <p>$3.50</p>
                </div>
            </div>          
            <NavBar/>  
        </div>  
    </main>
    </>
  )
}
