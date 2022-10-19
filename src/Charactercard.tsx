import React from "react";
import "./Charactercard.css";

export default function Charactercard(props: { name: string, image: string, origin:string }) {


    return <>
        <section>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name}/>
            <h4>{props.origin}</h4>
        </section>
    </>

}