import Head from 'next/head'
import styles from '@/styles/Game.module.css'
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from 'next/link';

export default function Game() {
  return (
    <>
      <Head>
        <title>Mini Adventure Game</title>
        <meta name="description" content="Save the bees one question at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.screen}>
        <Link className={styles.gameExit} href="/Home">
          <Image src="/images/x.svg"  width={30} height={30} alt="exit" className={styles.backImg}/>
        </Link>
          <Spline scene="https://prod.spline.design/MbkXQlE1sSPOonHg/scene.splinecode" />
        </div>
      </main>
    </>
  );
}
