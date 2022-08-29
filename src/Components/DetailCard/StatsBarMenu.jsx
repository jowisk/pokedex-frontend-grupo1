import React from 'react'
import StatsBar from './StatsBar'

const StatsBarMenu = ({stats, selectedPokemon, selectedPokemonType, selectedPokemonHP, selectedPokemonATK, selectedPokemonDEF, selectedPokemonSATK, selectedPokemonSDEF, selectedPokemonSPD}) => {
  return (
    <>
    {/* {stats.map((stat) => 
        <StatsBar
            stat={stat}
            selectedPokemon = {selectedPokemon}
            selectedPokemonHP = {selectedPokemonHP}
            selectedPokemonATK = {selectedPokemonATK}
            selectedPokemonDEF = {selectedPokemonDEF}
            selectedPokemonSATK = {selectedPokemonSATK}
            selectedPokemonSDEF = {selectedPokemonSDEF}
            selectedPokemonSPD = {selectedPokemonSPD}
        />
    )} */}
    <div className="flex items-center w-full justify-between">
        <div className="w-[20%] flex justify-between">
            <p>HP</p>
            <p>{}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${selectedPokemonType} w-[${selectedPokemonHP}%] rounded-[10px] max-w-[100%] min-w-[2%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[20%] flex justify-between">
            <p>ATK</p>
            <p>{}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${selectedPokemonType} w-[${selectedPokemonATK}%] rounded-[10px] max-w-[100%] min-w-[2%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[20%] flex justify-between">
            <p>DEF</p>
            <p>{}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${selectedPokemonType} w-[${selectedPokemonDEF}%] rounded-[10px] max-w-[100%] min-w-[2%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[20%] flex justify-between">
            <p>SATK</p>
            <p>{}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${selectedPokemonType} w-[${selectedPokemonSATK}%] rounded-[10px] max-w-[100%] min-w-[2%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[20%] flex justify-between">
            <p>SDEF</p>
            <p>{}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${selectedPokemonType} w-[${selectedPokemonSDEF}%] rounded-[10px] max-w-[100%] min-w-[2%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    <div className="flex items-center w-full justify-between">
        <div className="w-[20%] flex justify-between">
            <p>SPD</p>
            <p>{}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${selectedPokemonType} w-[${selectedPokemonSPD}%] rounded-[10px] max-w-[100%] min-w-[2%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    
    </>
  )
}

export default StatsBarMenu