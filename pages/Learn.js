import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import NavBar from '@/components/NavBar';
import styles from '@/styles/Learn.module.css';
import Head from "next/head";
import Link from "next/link";

export default function Learn() {
    const [data, setData] = useState([]);
    
    var apiKeyInfo = process.env.NEXT_PUBLIC_NAME;
    var url = `https://newsapi.org/v2/everything?q=bee%20AND%20(environment%20OR%20ecology%20OR%20pollination%20OR%20"habitat%20loss")%20AND%20NOT%20(sports%20OR%20entertainment%20OR%20technology%20OR%20finance%20OR%20trump)&language=en&apiKey=${apiKeyInfo}`;

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((info) => {
          setData(info.articles);
          console.log(info.articles);
        })
    }, [])
  
    return (
      <>
        <main className={`${styles.main}`}>
        <Header title="Learn" backImage="/images/back.svg" link="/" />
          <div className={styles.screen}>
            <div className={styles.articles}>
              <div className={styles.buffer}></div>
              {
                  data.map((i, index) => {
                  return(
                      <div key={index}>
                        {i.title}
                      </div>
                  )
                  })
              }
            </div>
          </div>
          <NavBar className={styles.nav}/>
        </main>
      </>
    );
}
