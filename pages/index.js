import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'; 
import NavBar from '@/components/NavBar';
import Landing from './Landing';
import Link from 'next/link';

export default function Home() {
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
            <img/> 
          <button>
            <Link href="/Landing">tutorial</Link>
          </button>
            <div className={styles.activityGraph}></div>
            <div className={styles.gallery}>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
            <NavBar className={styles.nav}/>
        </div>  
      </main>
    </>
  )
}
