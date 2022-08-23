import React from 'react'
import Type from './Type'

const TypeList = ({selectedPokemon}) => {
  return (
    <div className="flex">
        {selectedPokemon?.tipos?.map((types, key) => 
            <Type
                type={types}
                key={key}
            />
            )}
            
    </div>
  )
}

export default TypeList