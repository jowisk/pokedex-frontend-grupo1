import React from 'react'

const StatsBar = ({props}) => {
  return (
    <>
    <div className="flex items-center w-full justify-between">
        <div className="w-[20%] flex justify-between">
            <p></p>
            <p>{}</p>
        </div>
        
        <div className="w-[70%] bg-slate-300 rounded-[10px]">
            <div className={`h-[0.8rem] bg-red-300 w-[${props.selectedPokemon?.stats}] rounded-[10px] max-w-[100%]`}></div>
        </div>
    </div>
    </>
  )
}

export default StatsBar