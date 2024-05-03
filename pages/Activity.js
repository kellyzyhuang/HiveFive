import Head from "next/head";
import Header from "@/components/Header";
import styles from '@/styles/Activity.module.css'; 
import NavBar from "@/components/NavBar";

export default function Activity() {
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
        <Header title="Activity" backImage="/images/back.svg" link="/" />
          <div className={styles.buffer}></div>
            <div className={styles.categories}>
              <div className={styles.heading}>
                <h2>Track Your Progress</h2>
              </div>
              <div className={styles.userStats}>
                <a href="/Stats"><img src="/images/user_stats.jpg" alt="bar graph" className={styles.userStatsImage}/></a>
                <div className={styles.label}>
                  <h3>User Stats</h3>
                  <p>Track your usage rates!</p>
                </div>
              </div>
              <div className={styles.moneyDonated}>
              <a href="/Donations"><img src="/images/money_donated.jpg" alt="bar graph" className={styles.userStatsImage}/></a>
                <div className={styles.label}>
                  <h3>Money Donated</h3>
                  <p>Track your earnings!</p>
                </div>
              </div>
            </div>   
        </div>  
        <NavBar/>
      </main>
    </>
  )
}