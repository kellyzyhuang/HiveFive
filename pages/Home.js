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
            <h2 className={styles.heading}>Welcome to HiveFive!</h2>
            <p> { correctAnswersTotal } </p>
            <div className={styles.line}></div>
            <div className={styles.start}>
              <Image src="/images/happy_bee.svg" width={150} height={150} alt="beenard" className={styles.beenardStart}/>
              <button className={styles.startButtonLearn}>
                <Link className={styles.startLink} href="/Learn">Start Learning</Link>
              </button>
              <button className={styles.startButton}>
                <Link className={styles.startLink} href="/Quiz">Start Quiz</Link>
              </button>
            </div>
              <div className={styles.latestNews}>
                <button className={styles.latestNewsButton}>
                  <Link className={styles.latestNewsLink} href="/Learn">Latest News</Link>
                  <Image src="/images/back.svg" width={20} height={20} alt="arrow" className={styles.arrow}/>
                </button>
                <img src="/images/latestnews.png" alt="house background" className={styles.latestNewsImage}/>
              </div>
              <div className={styles.latestNews}>
                <button className={styles.latestProjectsButton}>
                  <Link className={styles.latestNewsLink} href="/Learn">Latest Projects</Link>
                  <Image src="/images/back.svg" width={20} height={20} alt="arrow" className={styles.arrow}/>
                </button>
                <img src="/images/latestprojects.png" alt="bee workers" className={styles.latestProjectsImage}/>
              </div>
              <div className={styles.adventure}>
                <div className={styles.adventureText}>
                  <p className={styles.adventureTitle}>Mini Adventure</p>
                  <p classname={styles.adventureDescription}>Oh no! Beenard's lost his way. Do you think you can help him navigate back home?</p>
                </div>                
                <Image src="/images/happy_bee.svg" width={150} height={150} alt="beenard" className={styles.beenardAdventure}/>
                <button className={styles.adventureButton}>
                  <Link className={styles.adventureLink} href="/Quiz">Play Now</Link>
                </button>
            </div>
            <div className={styles.buffer}></div>
              <NavBar className={styles.nav}/>
          </div>  
        </main>
      </>
    )
  }
