import React from 'react'
import ImagenPokemon from './ImagenPokemon'
import { Link } from 'react-router-dom'


const Pokemon = ({id, image, name, type, key}) => {

    console.log(type)
    return (
        <Link 
            to={`/details/${id}`}

        >
            <div className={`flex flex-col h-[200px] w-[200px] m-[15px] justify-between bg-white/50 shadow nav border${type} capitalize rounded-[15px] border-2`}>
                <div className="flex justify-end pr-[10px]">
                <p className={`id${type} font-bold pt-[5px]`}>#{String(id).padStart(3,'0')}</p>
                </div>
                <div className="flex items-center justify-center">
                    <ImagenPokemon
                        image={image}
                    />
                </div>
                <div className={`w-full h-[45px] flex flex-col text-black background${type} items-center justify-center rounded-b-[12px] mb-[-1px] mr-[15px]`}>
                    <h3 className={`font-semibold`}>{name}</h3>
                </div>
            </div>
        </Link>
  )
}

export default Pokemon