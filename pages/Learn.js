import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import NavBar from '@/components/NavBar';
import styles from '@/styles/Learn.module.css';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Learn() {
    const [data, setData] = useState([]);
    
    var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY;
    var url = `https://newsapi.org/v2/everything?q=bee%20AND%20(environment%20OR%20ecology%20OR%20pollination%20OR%20"habitat%20loss")%20AND%20NOT%20(sports%20OR%20entertainment%20OR%20technology%20OR%20finance%20OR%20trump)&language=en&apiKey=${apiKeyInfo}`;

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((info) => {
          setData(info.articles);
        })
    }, [])
  
    return (
      <>
        <main className={`${styles.main}`}>
            <Header title="Learn"/>
        <div className={styles.screen}>
            <div className={styles.articles}>
                {data.map((article, index) => (
                    <div key={index} className={styles.articleCard}>
                        <div className={styles.overlay}></div>
                        <img src='/images/bee-image3.jpg' alt="Article Image" layout='fill' objectFit='cover' />
                        <div className={styles.date}>
                        {/* {new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} */}
                        </div>
                        <div className={styles.title}>
                            {article.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <NavBar className={styles.nav}/>
        </main>
      </>
    );
}