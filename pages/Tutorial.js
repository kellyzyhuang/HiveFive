import { landingPages } from "@/data/data"; 
import { useState, useEffect } from "react";

export default function Tutorial(){

    const [pages, LandingPages] = useState([]);

    useEffect(() => {
        setPages(pagesData);
    }, []);
    return(
        <>
        <div>
            {pages.map((page, index) => (
                <div key={index}>
                    <h2>{page.title}</h2>
                    <p>{page.content}</p>
                </div>
            ))}
        </div>
        </>
    )
}