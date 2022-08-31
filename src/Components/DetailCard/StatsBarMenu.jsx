import React from 'react'
import StatsBar from './StatsBar'

const StatsBarMenu = (props) => {
  return (
    <>

    <div className="flex items-center w-full justify-between">
        <div className="w-[25%] flex justify-between">
            <p>HP</p>
            <p className="text-end">{props.selectedPokemonHP}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${props.selectedPokemon?.tipos?.length ? props.selectedPokemon?.tipos[0]?.nombre : 'does not exist'} w-[${props.selectedPokemonHP}%] rounded-[10px] max-w-[100%] min-w-[3%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[25%] flex justify-between">
            <p>ATK</p>
            <p className="text-end">{props.selectedPokemonATK}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${props.selectedPokemon?.tipos?.length ? props.selectedPokemon?.tipos[0]?.nombre : 'does not exist'} w-[${props.selectedPokemonATK}%] rounded-[10px] max-w-[100%] min-w-[3%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[25%] flex justify-between">
            <p>DEF</p>
            <p className="text-end">{props.selectedPokemonDEF}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${props.selectedPokemon?.tipos?.length ? props.selectedPokemon?.tipos[0]?.nombre : 'does not exist'} w-[${props.selectedPokemonDEF}%] rounded-[10px] max-w-[100%] min-w-[3%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[25%] flex justify-between">
            <p>SATK</p>
            <p className="text-end">{props.selectedPokemonSATK}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${props.selectedPokemon?.tipos?.length ? props.selectedPokemon?.tipos[0]?.nombre : 'does not exist'} w-[${props.selectedPokemonSATK}%] rounded-[10px] max-w-[100%] min-w-[3%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[25%] flex justify-between">
            <p>SDEF</p>
            <p className="text-end">{props.selectedPokemonSDEF}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${props.selectedPokemon?.tipos?.length ? props.selectedPokemon?.tipos[0]?.nombre : 'does not exist'} w-[${props.selectedPokemonSDEF}%] rounded-[10px] max-w-[100%] min-w-[3%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[25%] flex justify-between">
            <p>SPD</p>
            <p className="text-end">{props.selectedPokemonSPD}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${props.selectedPokemon?.tipos?.length ? props.selectedPokemon?.tipos[0]?.nombre : 'does not exist'} w-[${props.selectedPokemonSPD}%] rounded-[10px] max-w-[100%] min-w-[3%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    </>
  )
}

export default StatsBarMenu