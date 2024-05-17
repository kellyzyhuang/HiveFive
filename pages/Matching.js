import styles from "@/styles/Matching.module.css";
import Image from "next/image";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Link from "next/link";


export default function Matching(){
    return(
        <main className={`${styles.main}`}>
            <Header title="Matching" backImage="/images/back.svg" link="/"/>
            <div className={styles.screen}>
                <div className={styles.heading}>
                    <h4 className={styles.category}>Select your category</h4>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.plantSection}>
                    <Image src="/images/plants2.svg" alt="plants in watering can" width={141} height={169}/>
                    <div className={styles.textBtnPlants}>
                        <h3>Plants</h3>
                        <p>Explore the Plant Matches for Bees!</p>
                        <button>
                            <Link href="/Plants">
                                <Image className={styles.button} src="/images/next_arrow_teal.svg" alt="teal next arrow" width={50} height={50}/>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className={styles.speciesSection}>
                    <Image src="/images/species.svg" alt="bee infont of hexagon shapes" width={157} height={123}/>
                    <div className={styles.textBtnSpecies}>
                        <h3>Species</h3>
                        <p>Help Identify the Bees!</p>
                        <button>
                            <Link href="/Species">
                                <Image className={styles.button} src="/images/next_arrow_teal.svg" alt="teal next arrow" width={50} height={50}/>
                            </Link>
                        </button>
                    </div>
                </div>
                <NavBar/>
            </div>
        </main>
    )
}