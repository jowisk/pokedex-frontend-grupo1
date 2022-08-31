import React from 'react'
import balanza from '../Images/scale.png'
import regla from '../Images/ruler.png'


const WheightList = (props) => {
  return (
    <>
        <div className="flex justify-between flex-col">
            <div className="flex justify-between">
                <img className="h-[25px] w-[25px] mr-[5px]"src={balanza} alt="" />
                <p className="text-center">{(props.selectedPokemon?.datos_pokemon?.peso/10)} kg</p>
            </div>
            <div>
                <p>Weight</p>
            </div>
        </div>

        <div className="flex flex-col justify-between border-r-[1px] border-l-[1px] px-[50px] border-slate-500">
            <div className="flex justify-between">
                <img className="h-[25px] w-[25px]"src={regla} alt="" />
                <p>{(props.selectedPokemon?.datos_pokemon?.altura/100).toFixed(1)} m</p>
            </div>

            <div>
                <p>Height</p>
            </div>
        </div>

        <div className="flex flex-col text-center">
            <div className="flex flex-col capitalize">
                <p>{props.selectedPokemon?.movimientos?.length ? props.selectedPokemon?.movimientos[0]?.nombre : 'does not exist'}</p>
                <p>{props.selectedPokemon?.movimientos?.length ? props.selectedPokemon?.movimientos[1]?.nombre : 'does not exist'}</p>
            </div>

            <div>
                <p>Moves</p>
            </div>
        </div>

        
    </>
    
  )
}

export default WheightList;