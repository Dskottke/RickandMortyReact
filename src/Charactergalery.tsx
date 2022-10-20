import React, {useEffect, useState} from "react";
import Charactercard from "./Charactercard";
import "./Charactergalery.css"
import {nanoid} from "nanoid";
import axios from "axios";
import {Character} from "./CharacterModel"
export default function Charactergalery() {

//https://rickandmortyapi.com/api/character?page=2"



    const [characterList, setCharacter] = useState<Character[]>([])

        useEffect(() =>{ axios.get("https://rickandmortyapi.com/api/character?page=2")
            .then((response) => {
                return response.data
            })
            .catch((error) => console.log("error" + error))
            .then((data) => {
                setCharacter(data.results)
            })},[])




    /*   const characterResponse = () => axios.get("https://rickandmortyapi.com/api/character?page=2")
        .then((response) => {
            return response.data
        })
        .catch((error) => console.log("error" + error))
        .then((data) => {
            setCharacter(data.results)
        })  */




return (
    <main> {characterList.map((current) => {
        return <Charactercard
            name={current.name}
            image={current.image}
            origin={current.origin.name}
            key={nanoid()}/>
    })}
    </main>

)
}
