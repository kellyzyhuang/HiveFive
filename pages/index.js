import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Hive Five</title>
        <meta name="description" content="Save the bees one question at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.screen}>
          <Header title="Home"/>
          <div className={styles.buffer}></div>
            <img/>
            <div className={styles.activityGraph}></div>
            <div className={styles.gallery}>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
            <nav className={styles.nav}>{/*to be replaced by real nav bar*/}</nav>    
        </div>  
      </main>
    </>
  )
}
