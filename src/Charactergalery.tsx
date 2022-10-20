import React, {useEffect, useState} from "react";
import Charactercard from "./Charactercard";
import "./Charactergalery.css"
import {nanoid} from "nanoid";
import axios from "axios";
import {Character} from "./CharacterModel"
import Inputfield from "./Inputfield";
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

    const [name,setName]=useState<string>("")
    const filteredCharacter = characterList.filter((elem) => elem.name.includes(name))



return (

    <main>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />



        {filteredCharacter.map((current) => {
        return <Charactercard
            name={current.name}
            image={current.image}
            origin={current.origin.name}
            key={nanoid()}/>

    })}
    </main>

)
}
