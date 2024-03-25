import Head from "next/head";
import Header from "@/components/Header";
import styles from '@/styles/Home.module.css'

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
          <Header title="Activity"/>
          <div className={styles.buffer}></div>
            <div className={styles.categories}>
              {/* <Card/> to be replaced by card component*/}
              {/* <Card/> to be replaced by card component*/}
            </div>
            <nav className={styles.nav}>{/*to be replaced by real nav bar*/}</nav>    
        </div>  
      </main>
    </>
  )
}