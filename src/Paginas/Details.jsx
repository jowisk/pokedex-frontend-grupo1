import React from 'react'
import DetailCard from '../Components/DetailCard/DetailCard'
import imagenBulbasaur from '../Images/bulbasaur.png'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Details = () => {


    const {id} = useParams();
    const [selectedPokemon, setSelectedPokemon] = useState({});
    const [selectedPokemonHP, setSelectedPokemonHP] = useState("")
    const [selectedPokemonATK, setSelectedPokemonATK] = useState("")
    const [selectedPokemonDEF, setSelectedPokemonDEF] = useState("")
    const [selectedPokemonSATK, setSelectedPokemonSATK] = useState("")
    const [selectedPokemonSDEF, setSelectedPokemonSDEF] = useState("")
    const [selectedPokemonSPD, setSelectedPokemonSPD] = useState("")

        
    const [loading, setLoading] = useState(false)

    
    const getPokemon = async () => {
        setLoading(true)
        const result = await fetch(`http://localhost:4000/${id}`)
        const data = await result.json()
        setSelectedPokemon(data)
        console.log(data)
        console.log("selectedpokemon", selectedPokemon)
        setSelectedPokemonHP(data.datos_pokemon.hp)
        setSelectedPokemonATK(data.datos_pokemon.atk)
        setSelectedPokemonDEF(data.datos_pokemon.def)
        setSelectedPokemonSATK(data.datos_pokemon.satk)
        setSelectedPokemonSDEF(data.datos_pokemon.sdef)
        setSelectedPokemonSPD(data.datos_pokemon.spd)
        setLoading(false)
    }


    useEffect(() => {
        getPokemon();
      }, [id])
  
  return (
    <div className={`lg:p-[10px] background${selectedPokemon?.tipos?.length ? selectedPokemon?.tipos[0]?.nombre : 'does not exist'} w-full md:w-1/2 lg:m-auto h-screen`}>
      <div className="h-full md:w-1/3 m-auto border-[3px] border-black min-w-[410px] rounded-[15px] ">
          <DetailCard
            id={id}
            selectedPokemon = {selectedPokemon}
            selectedPokemonHP = {selectedPokemonHP}
            selectedPokemonATK = {selectedPokemonATK}
            selectedPokemonDEF = {selectedPokemonDEF}
            selectedPokemonSATK = {selectedPokemonSATK}
            selectedPokemonSDEF = {selectedPokemonSDEF}
            selectedPokemonSPD = {selectedPokemonSPD}
          />
        
      </div>
    </div>
  )
}

export default Details;

