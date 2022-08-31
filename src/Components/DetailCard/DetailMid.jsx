import React from 'react'
import TypeList from '../TypeList'
import About from './About'
import StatsBarMenu from './StatsBarMenu'
const DetailMid = (props) => {
  return (
    <>
    <div className="w-full h-[60%] rounded-[10px] mt-[15px] bg-white">
            <div className="w-full h-full flex flex-col rounded-[10px] ">
                <div className="mt-[15px] flex w-full justify-center rounded-[10px] text-white capitalize">
                    <TypeList
                        selectedPokemon={props.selectedPokemon}
                    />
                </div>

                <div>
                    <About
                        selectedPokemon={props.selectedPokemon}
                    />

                    <div className="flex flex-col mt-[20px]">
                        <p className={`text-center font-bold id${props.selectedPokemon?.tipos?.length ? props.selectedPokemon?.tipos[0]?.nombre : 'does not exist'}`}>Base Stats</p>

                        <div className="uppercase px-[40px] w-full mt-[25px]">
                            <div className='w-full'>
                                <StatsBarMenu
                                    selectedPokemon = {props.selectedPokemon}
                                    selectedPokemonHP = {props.selectedPokemonHP}
                                    selectedPokemonATK = {props.selectedPokemonATK}
                                    selectedPokemonDEF = {props.selectedPokemonDEF}
                                    selectedPokemonSATK = {props.selectedPokemonSATK}
                                    selectedPokemonSDEF = {props.selectedPokemonSDEF}
                                    selectedPokemonSPD = {props.selectedPokemonSPD}
                                    // selectedPokemonType = {selectedPokemonType}
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