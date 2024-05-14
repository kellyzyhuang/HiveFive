import Form from "@/components/Form";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "@/styles/Profile.module.css";
import Image from "next/image";

export default function Profile(){
    return(
        <>
            <main className={`${styles.main}`}>
            <Header title="Profile" backImage="/images/back.svg" link="/"/>
                <div className={styles.screen}>
                    <div className={styles.photoName}>
                        <Image src="/images/anika.png" alt="woman with glasses" width={170} height={115}/>
                        <h3>Hello, Anika!</h3>
                    </div>
                    <Form/>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Save</button>
                    </div>
                </div>
                <NavBar/>
            </main>
        </>
    )
}