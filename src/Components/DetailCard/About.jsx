import React from 'react'
import WheightList from '../WheightList'
const About = ({selectedPokemon}) => {
  return (
    <>
            <div className="flex justify-center mt-[20px] ">
                        <h3 className={`font-bold text-[20px] idgrass`}>About</h3>
                    </div>

                    <div className="flex justify-around mt-[25px]">
                        <div className="flex w-full justify-around px-[20px]">
                            <WheightList
                                selectedPokemonDetails={selectedPokemon}
                            />
                        </div>
                    </div>

                    <div className="mt-[20px] px-[20px]">
                        <p className="text-center">{selectedPokemon.datos_pokemon?.descripcion}</p>
                    </div>
    </>
  )
}

export default About