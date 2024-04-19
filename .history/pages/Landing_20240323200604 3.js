import styles from "./Landing.module.css";
import Images from "next/image";
import Button from "@/components/buttons";

export default function Landing(){
    return(
        <div>
            <img/>
            <Button/>
            <button className={styles.btnTutorial}></button>
        </div>
    )
}