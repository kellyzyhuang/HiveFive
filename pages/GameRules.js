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
                    <Image className={styles.beenardSad} src="/images/sad_beenard.png" width={150} height={150} alt="sad beenard"/>
                    <p className={styles.background}>
                    Oh no! Beenard the Bee seems to have lost his way.
                    use the WASD keys to help him navigate through this maze so he can get home!
                    </p>
                    <button className={styles.goButton}><Link className={styles.link} href="/Game">Let's Go!</Link></button>
                </div>
                <NavBar className={styles.nav}/>
            </main>
        </>
    );
}