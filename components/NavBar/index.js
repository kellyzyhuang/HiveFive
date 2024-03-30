import styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar(){
    return(
        <nav className={styles.navBar}>
            <div className={styles.navMenu}>{/* will add */}
            <ul className={styles.navList}>
                <li className={styles.activity}>
                    <Link href="/">
                        <div>
                            <img className={styles.navIcon}/>
                            <span className={styles.label}>Activity</span>
                        </div>
                    </Link>
                </li>
                <li className={styles.learnMore}>
                    <Link href="/">
                        <div>
                            <img className={styles.navIcon}/>
                            <span className={styles.label}>Learn</span>
                        </div>
                    </Link>
                </li>
                <li className={styles.quiz}>
                    <Link href={'/Quiz'}>
                        <div>
                            <img className={styles.navIcon}/>
                            Quiz
                        </div>
                    </Link>
                </li>
                <li className={styles.home}>
                    <Link href="/">
                        <div>
                            <img className={styles.navIcon}/>
                            <span className={styles.label}>Home</span>
                        </div>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}
