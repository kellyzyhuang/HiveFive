import Head from "next/head";
import Header from "@/components/Header";
import styles from '@/styles/About.module.css'; 
import NavBar from "@/components/NavBar";

export default function About() {
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
        <Header title="About" backImage="/images/back.svg" link="/" />
          <div className={styles.buffer}></div>
          <section className={styles.Heading}>
            <div className={styles.headingContent}>
              <h1>HiveFive</h1>
              <h4>Bee preservation app.</h4>
            </div>
          </section>
          <section className={styles.about}>
            <div className={styles.aboutHeading}>
              <h4>About</h4>
              <div className={styles.line}></div>
              <p>Welcome to our mobile app, HiveFive. 
                Our app is designed to educate our users 
                about the different bee species at risk and 
                how they can help to keep our pollinator 
                friends safe! </p>
              <p>We understand that not everyone has the time
                 or resources to help out, which is why we've
                  simplified the process here. On top of 
                  contributions made by our users, the team 
                  at HiveFive will also be donating a portion
                  of our proceeds to the help conserve the 
                  environment we live in!</p>
            </div>
          </section>
          <div className={styles.sponsors}>
            <img src="/images/wpc.png" alt="wpc logo"/>
            <img src="/images/bcac.png" alt="bcac logo"/>
          </div>
        <NavBar/>  
        </div>  
    </main>
    </>
  )
}