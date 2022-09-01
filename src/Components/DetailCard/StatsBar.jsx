import React from 'react'

const StatsBar = (props) => {
  return (
    <>
    <div className="flex items-center w-full justify-between">
        <div className="w-[25%] flex justify-between">
            <p>{props.nombre}</p>
            <p className="text-end">{props.value}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px] border-[1px] border-black">
            <div className={`h-[0.8rem] background${props.selectedPokemon?.tipos?.length ? props.selectedPokemon?.tipos[0]?.nombre : 'does not exist'} w-[${props.value}%] rounded-[10px] max-w-[100%] min-w-[3%] border-[1px] border-slate-300`}></div>
        </div>
    </div>
    </>
  )
}

export default StatsBar