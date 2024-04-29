import Header from "@/components/Header/index.js";
import NavBar from '../NavBar';
import React from "react";
import Link from "next/link";

export default function MatchingResults({tagLine, correct, incorrect}){
   return(
       <>
       <div>
           <Header title="Matching"/>
           <h1>{tagLine}</h1>
           {correct && (
                <div>
                    <h2>Easy BEEzy!</h2>
                    <p>{correct}</p>
                </div>
            )}
            {incorrect && (
                <div>
                    <h2>BUZZy Bummer!</h2>
                    {incorrect.map((answer) => (
                        <div key={answer.id}>
                            <h3>{answer.headline}</h3>
                            <p>{answer.description}</p>
                        </div>
                    ))}
                </div>
            )}
            <div>
                <button><Link href="/EndangeredSpecies">Match Endangered Species</Link></button>
                <button><Link href="/">Go Home</Link></button>
            </div>
           <NavBar/>
       </div>
       </>
   )
}
