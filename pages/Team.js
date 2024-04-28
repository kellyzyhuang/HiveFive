import styles from "@/styles/Team.module.css";
import Header from "@/components/Header";
import Image from "next/image";

export default function Team(){
    return(
        <>
            <main className={`${styles.main}`}>
                <Header title="Team" backImage="/images/back.svg" link="/"/>
                <div className={styles.screen}>
                    <div className={styles.ara}>
                        {/* <Image/> will add image after finishing the graphics*/}
                        <h3>Arabella</h3>
                        <p>Designer, Developer</p>
                    </div>
                    <div className={styles.kelly}>
                        {/* <Image/> will add image after finishing the graphics*/}
                        <h3>Kelly</h3>
                        <p>Designer, Developer</p>
                    </div>
                    <div className={styles.melissa}>
                        {/* <Image/> will add image after finishing the graphics*/}
                        <h3>Melissa</h3>
                        <p>Designer, Developer</p>
                    </div>
                </div>
            </main>
        </>
    )
}