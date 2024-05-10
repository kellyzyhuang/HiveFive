import styles from "@/styles/Team.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Team(){
    return(
        <>
            <main className={`${styles.main}`}>
                <Header title="Team" backImage="/images/back.svg" link="/"/>
                <div className={styles.screen}>
                    <div className={styles.ara}>
                        <Image src="/images/bee_three.svg" alt="bee with glasses" width={120} height={120}/>
                        <div className={styles.araDesc}>
                            <h3>Arabella</h3>
                            <p>Designer, Developer</p>
                        </div>
                    </div>
                    <div className={styles.kelly}>
                        <Image src="/images/bee_two.svg" alt="bee with eye smile" width={120} height={120}/>
                        <div className={styles.kellyDesc}>
                            <h3>Kelly</h3>
                            <p>Designer, Developer</p>
                        </div>
                    </div>
                    <div className={styles.melissa}>
                        <Image src="/images/bee_one.svg" alt="bee with smile" width={120} height={120}/>
                        <div className={styles.melissaDesc}>
                            <h3>Melissa</h3>
                            <p>Designer, Developer</p>
                        </div>
                    </div>
                </div>
                <NavBar/>
            </main>
        </>
    )
}