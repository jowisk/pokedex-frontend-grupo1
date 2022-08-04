import React from 'react'
import balanza from '../Images/scale.png'
import regla from '../Images/ruler.png'

const WheightList = ({selectedPokemonDetails}) => {
  return (
    <>
        <div className="flex justify-between flex-col">
            <div className="flex justify-between">
                <img className="h-[25px] w-[25px] mr-[5px]"src={balanza} alt="" />
                <p className="text-center">{(selectedPokemonDetails.weight/10)} kg</p>
            </div>

            <div>
                <p>Weight</p>
            </div>
        </div>

        <div className="flex flex-col justify-between border-r-[1px] border-l-[1px] px-[50px] border-slate-500">
            <div className="flex justify-between">
                <img className="h-[25px] w-[25px]"src={regla} alt="" />
                <p>{(selectedPokemonDetails.height/10)} m</p>
            </div>

            <div>
                <p>Height</p>
            </div>
        </div>

        <div className="flex flex-col text-center">
            <div className="flex flex-col capitalize">
                <p>{selectedPokemonDetails.moves && selectedPokemonDetails?.moves[0]?.move?.name}</p>
                <p>{selectedPokemonDetails.moves && selectedPokemonDetails?.moves[1]?.move?.name}</p>
            </div>

            <div>
                <p>Moves</p>
            </div>
        </div>

        
    </>
    
  )
}

export default WheightList;