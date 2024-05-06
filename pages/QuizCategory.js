import styles from "@/styles/QuizCategory.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function quizCategory(){
    return(
        <>
            <main className={`${styles.main}`}>
                <Header title="Quiz" backImage="/images/back.svg" link="/"/>
                <div className={styles.screen}>
                  <div className={styles.heading}>
                      <h4>Select your category</h4>
                      <div className={styles.line}></div>
                  </div>
                    <div className={styles.mathSection}>
                        <Image src="/images/math 1.svg" alt="math symbols" width={140} height={103} className={styles.mathImage}/>
                        <div className={styles.text}>
                            <div className={styles.textBtn}>
                                <h3>Math</h3>
                                <p>Challenge your brain with bee statistics!</p>
                            </div>
                            <button>
                                <Link href="/Quiz">
                                    <Image src="/images/pinkArrow.svg" alt="pink next arrow" width={50} height={50}/>
                                </Link>
                            </button>
                        </div> 
                    </div>
                    <div className={styles.triviaSection}>
                        <Image src="/images/TRIVIA 1.svg" alt="pink brain with googly eyes" width={140} height={103} className={styles.triviaImage}/>
                        <div className={styles.textArticles}>
                            <div className={styles.textBtnArticles}>
                                <h3>Trivia</h3>
                                <p>Challenge your knowledge on bee facts!</p>
                            </div>
                            <button>
                                <Link href="/Quiz">
                                    <Image src="/images/pinkArrow.svg" alt="pink next arrow" width={50} height={50}/>
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