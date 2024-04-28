import styles from "@/styles/LearnMore.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
import NavBar from "@/components/Articles";

export default function LearnMore(){
    return(
        <>
            <main className={`${styles.main}`}>
                <Header title="Learn More" backImage="/images/back.svg" link="/"/>
                <div className={styles.screen}>
                    <div className={styles.matchingSection}>
                        <Image src="/images/matching2.svg" alt="two puzzle pieces stuck together" width={160} height={123}/>
                        <div className={styles.text}>
                            <div className={styles.textBtn}>
                                <h3>Matching</h3>
                                <p>Learn about plants and bees through matching!</p>
                            </div>
                            <button>
                                <Link href="/Matching">
                                    <Image src="/images/next_arrow_green.svg" alt="green next arrow" width={50} height={50}/>
                                </Link>
                            </button>
                        </div> 
                    </div>
                    <div className={styles.articlesSection}>
                        <Image src="/images/article2.svg" alt="camping tent in a forest" width={160} height={123}/>
                        <div className={styles.textArticles}>
                            <div className={styles.textBtnArticles}>
                                <h3>Articles</h3>
                                <p>Read the latest news!</p>
                            </div>
                            <button>
                                <Link href="/Learn">
                                    <Image src="/images/next_arrow_green.svg" alt="green next arrow" width={50} height={50}/>
                                </Link>
                            </button>
                        </div>
                     </div>
                    <div className={styles.teamSection}>
                        <Image src="/images/team.svg" alt="three bees" width={160} height={123}/>
                        <div className={styles.textTeam}>
                            <div className={styles.textBtnTeam}>
                                <h3>Team</h3>
                                <p>Meet our team members!</p>
                            </div>
                            <button>
                                <Link href="/Team">
                                    <Image src="/images/next_arrow_green.svg" alt="green next arrow" width={50} height={50}/>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}