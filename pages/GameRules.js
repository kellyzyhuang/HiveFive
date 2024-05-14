import Header from "@/components/Header";
import NavBar from '@/components/NavBar';
import styles from '@/styles/GameRules.module.css';
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

export default function GameRules() {

    return (
        <>
            <main className={`${styles.main}`}>
                <Header title="Mini Adveture" backImage="/images/back.svg" link="/" />
                <div className={styles.screen}>
                    <div className={styles.buffer}></div>
                        <div className={styles.rules}>
                            <Image className={styles.beenardSad} src="/images/sad_beenard.png" width={170} height={150} alt="sad beenard"/>
                            <p className={styles.background}>Oh no! Beenard the Bee seems to have gotten lost on his way! Can you help him get back home?</p>
                            <Image src="/images/WASD.svg" alt="wasd keys" width={150} height={150}/>
                            <p className={styles.background}>Use the WASD keys to help him navigate through the streets. </p>
                            <Image src="/images/ArrowKeys.svg" alt="arrow keys" width={150} height={150}/>
                            <p className={styles.background}>Use the arrow keys to pan your view.</p>
                            <Image src="/images/Space.svg" alt="space bar" width={200} height={100}/>
                            <p className={styles.background}>Press the space bar to jump.</p>
                            <button className={styles.goButton}><Link className={styles.link} href="/Game">Let's Go!</Link></button>
                        </div>
                </div>
                <NavBar className={styles.nav}/>
            </main>
        </>
    );
}