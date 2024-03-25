import Head from "next/head";
import Header from "@/components/Header";
import styles from '@/styles/Stats.module.css'

export default function Stats() {
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
          <Header title="User Stats"/>
          <div className={styles.buffer}></div>
            <section className={styles.userStats}> 
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <h3>32</h3>
                  <h6>Current Streak</h6>
                </li>
                <li className={styles.listItem}>
                  <h3>95%</h3>
                  <h6>Accuracy</h6>
                </li>
                <li className={styles.listItem}>
                  <h3>210</h3>
                  <h6>Questions</h6>
                </li>
              </ul>
            </section>
            <div className={styles.timeMenu}></div>
            <section className={styles.graphs}>
              <h3>Time Usage</h3>
              <div className={styles.graph}></div>
              <h3>Accuracy Over Time</h3>
              <div classNAme={styles.graph}></div>
            </section>
            <nav className={styles.nav}>{/*to be replaced by real nav bar*/}</nav>    
        </div>  
    </main>
    </>
  )
}