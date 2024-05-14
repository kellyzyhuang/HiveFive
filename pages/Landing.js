import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Landing.module.css";

export default function Landing() {

    return (
        <div className={styles.Landing}>
            <Image className={styles.beehiveImg} src="/images/beehive2.svg" width={420} height={200} alt="Beehive"/>
            <Image className={styles.leftCloud} src="/images/left_cloud.svg" width={200} height={100} alt="Left Cloud"/>
            <Image className={styles.rightCloud} src="/images/right_cloud.svg" width={200} height={100} alt="Right Cloud"/>
            <Image className={styles.happyBeenard} src="/images/happy_bee.svg" width={200} height={200} alt="Happy Bee"/>
            <div className={styles.text}>
                <h1>HiveFive</h1>
                <h3>Help save the bees.</h3>
            </div>
            <Image className={styles.grassImg} src="/images/grass_bottom.svg" width={430} height={300} alt="Grass"/>
            <Link href="/Tutorial">
                <button className={styles.startButton}>Start Buzzin'</button>
            </Link>
        </div>
    );
}
