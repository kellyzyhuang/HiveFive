import { useState } from 'react';
import styles from './Awards.module.css';
import Image from 'next/image'; 
import Link from 'next/link';
import Images from 'next/image'; 

export default function Awards( {itemName, requirements, image} ) {

  
  return(
    <>
        <div className={styles.rewardsItem}>
            <h3 className={styles.itemName}>{ itemName }</h3>
            <Images src={image} width={80} height={115} alt="locked" className={styles.lockedImg}/>
            <p>{requirements}</p>
        </div>
    </>
  )
}