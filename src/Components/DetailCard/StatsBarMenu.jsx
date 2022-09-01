import React from 'react'
import StatsBar from './StatsBar'

const StatsBarMenu = (props) => {

  return (
    <>
        {props.selectedPokemon?.stats?.map((stat) => (
            <StatsBar
                nombre={stat.nombre}
                value={stat.value}
                selectedPokemon = {props.selectedPokemon}
            />
        ))}   
    </>
  )
}

export default StatsBarMenu