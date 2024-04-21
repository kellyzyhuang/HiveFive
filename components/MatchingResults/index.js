import Header from "@/components/Header/index.js";
import NavBar from '../NavBar';
import React from "react";

export default function MatchingResults(tagLine, headline, description, matchSpecies, goHome){
   return(
       <>
       <div>
           <Header title="Matching"/>
           <h1>{tagLine}</h1>
           <h2>{headline}</h2>
           <p>{description}</p>
           <img src="/images/happy_bee.svg" alt="happy bee"/>
           <div>
               <buttons onClick={matchSpecies}>Match Endangered Species</buttons>
               <buttons onClick={goHome}>Go Home</buttons>
           </div>
           <NavBar/>
       </div>
       </>
   )
}
