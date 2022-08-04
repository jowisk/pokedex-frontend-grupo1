import React from 'react'
import imagenPokebola from '../Images/pokebola.png'
import Search from './Search'
import Sort from './Sort'

const Header = ({handleNum, handleStr, setSearch}) => {
  return (
    <div className="flex flex-col rounded-b-3xl py-[15px] z-10 nav w-full border-black border-b-[2px] overflow-y-hidden">
      <div className="px-[20px] flex flex-row w-full items-center justify-between">
        <div className="flex items-center">
          <img
              className="w-[70px] h-[50px] pr-[20px]" 
              src={imagenPokebola}
          />
          <h1 className="font-bold text-4xl">Pokédex</h1>
        </div>
        
        <Sort
          handleNum={handleNum}
          handleStr={handleStr}
        />
      </div>
        <Search
          setSearch={setSearch}
        />


    </div>
  )
}

export default Header