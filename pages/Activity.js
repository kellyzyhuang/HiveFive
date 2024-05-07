import Head from "next/head";
import Header from "@/components/Header";
import styles from '@/styles/Activity.module.css'; 
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";

export default function Activity() {
  return(
    <>
    <Head>
        <title>Hive Five</title>
        <meta name="description" content="Save the bees one question at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${styles.main}`}>
        <Header title="Activity" backImage="/images/back.svg" link="/"/>
        <div className={styles.screen}>
          <div className={styles.heading}>
              <h4>Select your category</h4>
              <div className={styles.line}></div>
          </div>
            <div className={styles.mathSection}>
                <Image src="/images/userstats.svg" alt="math symbols" width={140} height={103} className={styles.mathImage}/>
                <div className={styles.text}>
                    <div className={styles.textBtn}>
                        <h3>User Stats</h3>
                        <p>Track your progress and app usage!</p>
                    </div>
                    <button>
                        <Link href="/Stats">
                            <Image src="/images/yellowArrow.svg" alt="pink next arrow" width={50} height={50} className={styles.button}/>
                        </Link>
                    </button>
                </div> 
            </div>
            <div className={styles.triviaSection}>
                <Image src="/images/moneydonated.svg" alt="pink brain with googly eyes" width={140} height={103} className={styles.triviaImage}/>
                <div className={styles.textArticles}>
                    <div className={styles.textBtnArticles}>
                        <h3>Money Donated</h3>
                        <p>Track your earnings!</p>
                    </div>
                    <button>
                        <Link href="/Donations">
                            <Image src="/images/yellowArrow.svg" alt="pink next arrow" width={50} height={50} className={styles.button}/>
                        </Link>
                    </button>
                </div>
              </div>
        </div>
        <NavBar/>
      </main>
    </>
  )
}