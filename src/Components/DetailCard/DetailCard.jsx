import React from 'react'
import { useState , useEffect} from 'react'
import DetailHeader from './DetailHeader'
import DetailMid from './DetailMid'


// const DetailCard = ({pokemonList, selectedPokemon, selectedPokemonType, selectedPokemonWeight, selectedPokemonHeight, selectedPokemonMove1, selectedPokemonMove2, selectedPokemonHP, selectedPokemonATK, selectedPokemonDEF, selectedPokemonSATK, selectedPokemonSDEF, selectedPokemonSPD}) => {
const DetailCard = (props) => {
    
    const [loading, setLoading] = useState(false)

    const stats = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"]
    
    

    return (
    
    <div className={`border-white bg-white w-full h-full border-[5px] rounded-[10px] lg:w-[650px] lg:m-auto min-w-[100%]`}>
        
        <DetailHeader
            selectedPokemon = {props.selectedPokemon}
            type = {props.type}

        />

        <DetailMid
            selectedPokemon = {props.selectedPokemon}
            stats = {stats}
            
        />
    </div>
  )
}

export default DetailCard