import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect, useCallback } from 'react'
import DetailHeader from './DetailHeader'
import DetailMid from './DetailMid'


const DetailCard = ({id}) => {

    const [selectedPokemon, setSelectedPokemon ] = useState({});
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState({})
    const [selectedPokemonText, setSelectedPokemonText] = useState("")
    const [selectedPokemonHP, setSelectedPokemonHP] = useState("")
    const [selectedPokemonATK, setSelectedPokemonATK] = useState("")
    const [selectedPokemonDEF, setSelectedPokemonDEF] = useState("")
    const [selectedPokemonSATK, setSelectedPokemonSATK] = useState("")
    const [selectedPokemonSDEF, setSelectedPokemonSDEF] = useState("")
    const [selectedPokemonSPD, setSelectedPokemonSPD] = useState("")
    const [pokemonTypes, setPokemonTypes] = useState ("")
    const [pokemonType, setPokemonType] = useState("")

    const [loading, setLoading] = useState(false)

    const stats = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"]
    const getPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then (res => res.json())
        .then ((fetchedPokemon) => {
            setSelectedPokemon(fetchedPokemon);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const getPokemonDetails = async () => {
        setLoading(true)

        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const fetchedPokemon = await result.json();
            setSelectedPokemonDetails(fetchedPokemon);
            setPokemonType(fetchedPokemon.types[0].type.name)
            setPokemonTypes(fetchedPokemon.types[{}])
            setSelectedPokemonHP(fetchedPokemon.stats[0].base_stat)
            setSelectedPokemonATK(fetchedPokemon.stats[1].base_stat)
            setSelectedPokemonDEF(fetchedPokemon.stats[2].base_stat)
            setSelectedPokemonSATK(fetchedPokemon.stats[3].base_stat)
            setSelectedPokemonSDEF(fetchedPokemon.stats[4].base_stat)
            setSelectedPokemonSPD(fetchedPokemon.stats[5].base_stat)
        setLoading(false)
    }

    const getPokemonText = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(res => res.json())
        .then((fetchedPokemon) => {
            setSelectedPokemonText(fetchedPokemon.flavor_text_entries[5].flavor_text)
        })
        .catch ((error) => {
            console.log(error)
        })
    }


    
    useEffect(() => {
        getPokemon();
        getPokemonDetails();
        getPokemonText();
      }, [id])

    
    
    return (
    
    <div className={`border${pokemonType} background${pokemonType} w-full h-full border-[5px] rounded-[10px]`}>
        
        <DetailHeader
            selectedPokemon = {selectedPokemon}
        />

        <DetailMid
            selectedPokemonDetails = {selectedPokemonDetails}
            pokemonType = {pokemonType}
            selectedPokemonText = {selectedPokemonText}
            stats = {stats}
        />
    </div>
  )
}

export default DetailCard