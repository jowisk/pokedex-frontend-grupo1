import React from 'react'
import Type from './Type'

const TypeList = ({selectedPokemonDetails}) => {
  return (
    <div className="flex">
        {selectedPokemonDetails?.types?.map((types) => 
            <Type
                type={types}
            />
            )}
            
    </div>
  )
}

export default TypeList