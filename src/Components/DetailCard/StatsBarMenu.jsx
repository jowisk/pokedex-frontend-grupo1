import React from 'react'
import StatsBar from './StatsBar'

const StatsBarMenu = ({stats, selectedPokemon}) => {
  return (
    <>
    {stats.map((stat) => 
        <StatsBar
            stat={stat}
            selectedPokemon = {selectedPokemon}
        />
    )}
    </>
  )
}

export default StatsBarMenu