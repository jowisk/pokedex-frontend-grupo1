import React from 'react'
import TypeList from '../TypeList'
import About from './About'
import StatsBarMenu from './StatsBarMenu'
const DetailMid = ({selectedPokemon, selectedPokemonType, selectedPokemonWeight, selectedPokemonHeight, selectedPokemonMove1, selectedPokemonMove2, selectedPokemonHP, selectedPokemonATK, selectedPokemonDEF, selectedPokemonSATK, selectedPokemonSDEF, selectedPokemonSPD, stats}) => {
  return (
    <>
    <div className="w-full h-[60%] rounded-[10px] mt-[15px] bg-white">
            <div className="w-full h-full flex flex-col rounded-[10px] ">
                <div className="mt-[15px] flex w-full justify-center rounded-[10px] text-white capitalize">
                    <TypeList
                        selectedPokemon={selectedPokemon}
                    />
                </div>

                <div>
                    <About
                        selectedPokemon={selectedPokemon}
                        selectedPokemonType = {selectedPokemonType}
                        selectedPokemonWeight = {selectedPokemonWeight}
                        selectedPokemonHeight = {selectedPokemonHeight}
                        selectedPokemonMove1 = {selectedPokemonMove1}
                        selectedPokemonMove2 = {selectedPokemonMove2}
                    />

                    <div className="flex flex-col mt-[20px]">
                        <p className={`text-center font-bold id${selectedPokemonType}`}>Base Stats</p>

                        <div className="uppercase px-[40px] w-full mt-[25px]">
                            <div className='w-full'>
                                <StatsBarMenu
                                    stats = {stats}
                                    selectedPokemonType = {selectedPokemonType}
                                    selectedPokemon = {selectedPokemon}
                                    selectedPokemonHP = {selectedPokemonHP}
                                    selectedPokemonATK = {selectedPokemonATK}
                                    selectedPokemonDEF = {selectedPokemonDEF}
                                    selectedPokemonSATK = {selectedPokemonSATK}
                                    selectedPokemonSDEF = {selectedPokemonSDEF}
                                    selectedPokemonSPD = {selectedPokemonSPD}
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