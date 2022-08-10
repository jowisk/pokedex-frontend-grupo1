import React from 'react'
import TypeList from '../TypeList'
import About from './About'
import StatsBarMenu from './StatsBarMenu'
const DetailMid = ({selectedPokemonDetails, pokemonType, selectedPokemonText, stats}) => {
  return (
    <>
    <div className="w-full h-[65%] rounded-[10px] mt-[15px] bg-white">
            <div className="w-full h-full flex flex-col rounded-[10px] ">
                <div className="mt-[50px] flex w-full justify-center rounded-[10px] text-white capitalize">
                    <TypeList
                        selectedPokemonDetails={selectedPokemonDetails}
                    />
                </div>

                <div>
                    <About
                        pokemonType={pokemonType}
                        selectedPokemonDetails={selectedPokemonDetails}
                        selectedPokemonText={selectedPokemonText}
                    />

                    <div className="flex flex-col mt-[20px]">
                        <p className={`text-center font-bold id${pokemonType}`}>Base Stats</p>

                        <div className="uppercase px-[40px] w-full mt-[25px]">
                            <div className='w-full'>
                                <StatsBarMenu
                                    stats = {stats}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default DetailMid