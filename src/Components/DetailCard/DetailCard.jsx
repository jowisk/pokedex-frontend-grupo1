import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect, useCallback } from 'react'
import DetailHeader from './DetailHeader'
import DetailMid from './DetailMid'


const DetailCard = ({id}) => {

    const [selectedPokemon, setSelectedPokemon] = useState({});


    const [loading, setLoading] = useState(false)

    const stats = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"]
    
    const getPokemon = async () => {
        setLoading(true)
        const result = await fetch(`http://localhost:4000/${id}`)
        const data = await result.json()
        setSelectedPokemon(data)
        console.log(data)
        setLoading(false)
    }


    // const getPokemon = async () => {
    //     setLoading(true)
    //     const result = await fetch(`http://localhost:4000/${id}`)
    //     const data = await result.json()
    //     setSelectedPokemon(data)
    //     console.log(data)
    //     setLoading(false)
    // }

    
    useEffect(() => {
        getPokemon();
      }, [id])

    
    
    return (
    
    <div className={`bordergrass backgroundgrass w-full h-full border-[5px] rounded-[10px]`}>
        
        <DetailHeader
            selectedPokemon = {selectedPokemon}
        />

        <DetailMid
            selectedPokemon = {selectedPokemon}
            stats = {stats}
        />
    </div>
  )
}

export default DetailCard