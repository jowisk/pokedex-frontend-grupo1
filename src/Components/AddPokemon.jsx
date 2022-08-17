import React from 'react'
import { Link } from 'react-router-dom'
const AddPokemon = () => {
    return (
        <Link 
            to={`/create`}

        >
            <div className={`flex flex-col h-[200px] w-[200px] m-[15px] justify-between bg-white/50 shadow nav border-[#666666] capitalize rounded-[15px] border-2`}>
                <div className="flex justify-end pr-[10px]">
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-[70px] font-bold items-center justify-center">?</p>
                </div>
                <div className={`w-full h-[45px] flex flex-col text-black bg-[#666666] items-center justify-center rounded-b-[12px] mb-[-1px] mr-[15px]`}>
                    <h3 className={`font-semibold`}>Agregar</h3>
                </div>
            </div>
        </Link>
  )
}

export default AddPokemon