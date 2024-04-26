import { useState, useEffect } from 'react';
import styles from '@/styles/Tutorial.module.css';
import Link from "next/link";
import { landingPages } from '@/data/data';
import React from 'react';

export default function Tutorial(){

    const [pages, setPages] = useState([]);
    const [pageNow, setPageNow] = useState(0);
    const [progressIndicator, setProgressIndicator] = useState(null);
    const [navBarExamples, setNavBarExamples] = useState(null);

    const nextPage = () => {
        setPageNow(pageNow + 1);
    }
    
    useEffect(() => {
        setPages(landingPages.tutorials);
    }, []);

    useEffect(() => {
        setProgressIndicator(pages[pageNow]);
        setNavBarExamples(pages[pageNow]);
    }, [pageNow, pages]);

    return(
        <>
        <main className={`${styles.main}`}>
            <div className={styles.Landing}>
                <div className={styles.skip}>
                <Link href="/Home"> <button className={styles.skipButton}>Skip</button></Link>{/* will have to change the index page to tutorial */}
                </div>
                <div className={styles.heading}>
                    <h1>HiveFive</h1>
                    <h2>{pages[pageNow]?.title}</h2>
                </div>
                <div className={styles.navbarExamples}>
                {navBarExamples && (
                        <div>
                            <img src={navBarExamples.navbar} alt={navBarExamples.alt2} width={410} height={200}/>
                        </div>
                    )}
                </div>
                <img className={styles.leftCloud} src="/images/left_cloud.svg" alt="left cloud" width={200} height={100}/>
                <img className={styles.rightCloud} src="/images/right_cloud.svg" alt="right cloud" width={200} height={100}/>
                <div className={styles.dialouge}>
                    <p>{pages[pageNow]?.description}</p>
                </div>
                    <img className={styles.happyBee} src="/images/happy_bee.svg" alt="happy bee mascot" width={250} height={200}/>
                <div className={styles.progIndicator}>
                    {progressIndicator && (
                        <div>
                            <img   src={progressIndicator.image} alt={progressIndicator.alt} width={100} height={50}/>
                        </div>
                    )}
                </div>
                <div className={styles.continue}>
                    <button className={styles.continueButton} onClick={nextPage}>Continue<img src="/images/next_icon.svg" alt="next icon" width={23} height={23}/></button>
                </div>
            </div>
        </main>
        </>
    )
}