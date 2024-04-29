  import Head from 'next/head'
  import Image from 'next/image'
  import styles from '@/styles/Home.module.css'
  import Header from '@/components/Header'; 
  import NavBar from '@/components/NavBar';
  import Link from 'next/link';
  import { useCorrectAnswers } from '../CorrectAnswersContext';

  export default function Home() {
    const { correctAnswersTotal } = useCorrectAnswers();
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
        <main className={styles.main}>
          <div className={styles.screen}>
            <Header title="Home" backImage="/images/123.svg"/>
            <div className={styles.buffer}></div>
            <Image className={styles.beekeper} src="/images/home.svg" alt="beekeper vector" width={348} height={361}/>
            <div className={styles.welcomeBack}>
              <p>Are you ready to save the bees?</p>
              <h2 className={styles.heading}>Welcome back, <span>Anika!</span></h2>
            </div>
            <div className={styles.donation}>
              <Link className={styles.donationLink} href="/"><h3>Total Donations: </h3></Link>
              <p> CAD ${ correctAnswersTotal } </p>
            </div>
            <div className={styles.quizSection}>
              <div>
                <Image src="/images/Trivia.svg" alt="wondering boy with a question mark" width={127} height={140}/>
                <h4>Maximize Your <span>Points</span> Potential Today!</h4>
              </div>
              <button className={styles.quizButton}><Link href="/Quiz">Start Quiz</Link></button>
            </div>
              <div className={styles.latestNews}>
                <div>
                  <Image src="/images/article2.svg" alt="camping tent in the forest" width={176} height={115}/>
                  <h4>Keeping You in the Loop.</h4>
                </div>
                <button className={styles.latestNewsButton}>
                  <Link className={styles.latestNewsLink} href="/Learn">Latest News</Link>
                  <Image src="/images/back.svg" width={20} height={20} alt="arrow" className={styles.newsArrow}/>
                </button>
              </div>
              <div className={styles.matching}>
                <div className={styles.matchingDiv}>
                  <Image src="/images/plants2.svg" alt="plants in a watering can" width={108} height={129}/>
                  <h4>Find the Perfect Match!</h4>
                </div>
                <button className={styles.matchingButton}>
                  <Link className={styles.matchingLink} href="/Matching">Try Matching</Link>
                  <Image src="/images/back.svg" width={20} height={20} alt="arrow" className={styles.matchingArrow}/>
                </button>
              </div>
              <div className={styles.adventure}>
                <div className={styles.adventureText}>
                  <p className={styles.adventureTitle}>Mini Adventure</p>
                  <p classname={styles.adventureDescription}>Oh no! Beenard's lost his way. Do you think you can help him navigate back home?</p>
                </div>                
                <Image src="/images/happy_bee.svg" width={150} height={150} alt="beenard" className={styles.beenardAdventure}/>
                <button className={styles.adventureButton}>
                  <Link className={styles.adventureLink} href="/">Play Now</Link>
                </button>
            </div>
            <div className={styles.buffer}></div>
              <NavBar className={styles.nav}/>
          </div>  
        </main>
      </>
    )
  }
