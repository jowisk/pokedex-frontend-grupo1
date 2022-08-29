import React from 'react'
import { useState , useEffect} from 'react'
import DetailHeader from './DetailHeader'
import DetailMid from './DetailMid'


const DetailCard = ({selectedPokemon, selectedPokemonType, selectedPokemonWeight, selectedPokemonHeight, selectedPokemonMove1, selectedPokemonMove2, selectedPokemonHP, selectedPokemonATK, selectedPokemonDEF, selectedPokemonSATK, selectedPokemonSDEF, selectedPokemonSPD}) => {
    
    const [loading, setLoading] = useState(false)

    const stats = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"]
       
    return (
    
    <div className={`border-white bg-white w-full h-full border-[5px] rounded-[10px] lg:w-[650px]`}>
        
        <DetailHeader
            selectedPokemon = {selectedPokemon}
            selectedPokemonType = {selectedPokemonType}
        />

        <DetailMid
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
            stats = {stats}
            
        />
    </div>
  )
}

export default DetailCard