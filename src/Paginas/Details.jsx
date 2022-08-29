import React from 'react'
import DetailCard from '../Components/DetailCard/DetailCard'
import imagenBulbasaur from '../Images/bulbasaur.png'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Details = () => {


  const {id, index} = useParams();
  
  const [selectedPokemon, setSelectedPokemon] = useState({});
    const [selectedPokemonType, setSelectedPokemonType] = useState('')
    const [selectedPokemonWeight, setSelectedPokemonWeight] = useState('')
    const [selectedPokemonHeight, setSelectedPokemonHeight] = useState('')
    const [selectedPokemonMove1, setSelectedPokemonMove1] = useState('')
    const [selectedPokemonMove2, setSelectedPokemonMove2] = useState('')
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
        setSelectedPokemonType(data.tipos[0].nombre)
        setSelectedPokemonWeight(data.datos_pokemon.peso)
        setSelectedPokemonHeight(data.datos_pokemon.altura)
        setSelectedPokemonMove1(data.movimientos[0].nombre)
        setSelectedPokemonMove2(data.movimientos[1].nombre)
        setSelectedPokemonHP(data.datos_pokemon.hp)
        setSelectedPokemonATK(data.datos_pokemon.atk)
        setSelectedPokemonDEF(data.datos_pokemon.def)
        setSelectedPokemonSATK(data.datos_pokemon.satk)
        setSelectedPokemonSDEF(data.datos_pokemon.sdef)
        setSelectedPokemonSPD(data.datos_pokemon.spd)
        console.log(data)
        console.log(selectedPokemonType)
        setLoading(false)
    }
    
    useEffect(() => {
        getPokemon();
      }, [id])
  
  return (
    <div className={`lg:p-[10px] background${selectedPokemonType} min-w-[720px] h-screen`}>
      <div className="h-full w-[50%] m-auto border-[3px] border-black rounded-[15px] ">
          <DetailCard
            id={id}
            selectedPokemon = {selectedPokemon}
            selectedPokemonType = {selectedPokemonType}
            selectedPokemonWeight = {selectedPokemonWeight}
            selectedPokemonHeight = {selectedPokemonHeight}
            selectedPokemonMove1 = {selectedPokemonMove1}
            selectedPokemonMove2 = {selectedPokemonMove2}
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

