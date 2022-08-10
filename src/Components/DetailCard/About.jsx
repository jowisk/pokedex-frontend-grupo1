import React from 'react'
import WheightList from '../WheightList'
const About = ({pokemonType, selectedPokemonDetails, selectedPokemonText}) => {
  return (
    <>
            <div className="flex justify-center mt-[20px] ">
                        <h3 className={`font-bold text-[20px] id${pokemonType}`}>About</h3>
                    </div>

                    <div className="flex justify-around mt-[25px]">
                        <div className="flex w-full justify-around px-[20px]">
                            <WheightList
                                selectedPokemonDetails={selectedPokemonDetails}
                            />
                        </div>
                    </div>

                    <div className="mt-[20px] px-[20px]">
                        <p className="text-center">{selectedPokemonText.replace('', ' ')}</p>
                    </div>
    </>
  )
}

export default About