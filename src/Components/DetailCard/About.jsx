import React from 'react'
import WheightList from '../WheightList'
// const About = ({selectedPokemon, selectedPokemonType, selectedPokemonWeight, selectedPokemonHeight, selectedPokemonMove1, selectedPokemonMove2}) => {
const About = (props) => {
  return (
    <>
            <div className="flex justify-center mt-[20px] ">
                        <h3 className={`font-bold text-[20px] id${props.selectedPokemon?.tipos?.length ? props.selectedPokemon?.tipos[0]?.nombre : 'does not exist'}`}>About</h3>
                    </div>

                    <div className="flex justify-around mt-[25px]">
                        <div className="flex w-full justify-around px-[20px]">
                            <WheightList
                                selectedPokemon={props.selectedPokemon}

                            />
                        </div>
                    </div>

                    <div className="mt-[20px] px-[20px]">
                        <p className="text-center">{props.selectedPokemon.datos_pokemon?.descripcion}</p>
                    </div>
    </>
  )
}

export default About