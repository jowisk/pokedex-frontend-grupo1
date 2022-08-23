import React from 'react'
import { Link } from 'react-router-dom'
import imagenPokebola from '../../Images/pokebola.png'
const DetailHeader = ({selectedPokemon}) => {

    const nextPokemon = parseInt(selectedPokemon.datos_pokemon?.id) + 1;
    const previousPokemon = parseInt(selectedPokemon.datos_pokemon?.id) - 1;




  return (
    <>
     <img src={selectedPokemon.datos_pokemon?.img} className="absolute top-[13%] z-[100] m-auto left-0 right-0 w-[250px] h-[250px]"/>

     <div className={` w-full h-[33%] p-[20px] flex flex-col justify-between`}>
            <div className=" flex justify-between">
                <div className="flex items-center">
                    <Link to='/'>
                        <i class="fa-solid fa-arrow-left text-[30px] text-white mr-[10px]"></i>
                    </Link>

                    <p className={`font-semibold text-[25px] capitalize text-white`}>{selectedPokemon?.datos_pokemon?.nombre}</p>
                </div>

                <div className="flex items-center">
                    <p className="text-[25px] font-semibold text-white">#{String(selectedPokemon.datos_pokemon?.id).padStart(3,'0')}</p>
                </div>
            </div>
            
            <div className="flex flex-col items-end">
                <img src={imagenPokebola} className="opacity-30 static ml-[150px] h-[200px] w-[200px]" alt="" srcset="" />

                {
                    (selectedPokemon?.datos_pokemon?.id < 2) ? 

                    <Link to={`/details/${nextPokemon}`}>
                        <i className="fa-solid flex  text-[25px] text-white mr-6 justify-end fa-arrow-right "></i>
                    </Link> : 

                    <div className="flex justify-between w-full">

                        <Link to={`/details/${previousPokemon} `}>
                            <i className="fa-solid flex  text-[25px] text-white mr-6 justify-end fa-arrow-left "></i>
                        </Link> 

                        <Link to={`/details/${nextPokemon} `}> 
                            <i className="fa-solid flex  text-[25px] text-white mr-6 justify-end fa-arrow-right "></i>
                        </Link> 

                    </div>
                }

            </div>
        </div>
    </>
  )
}

export default DetailHeader