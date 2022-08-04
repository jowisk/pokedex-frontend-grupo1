import React from 'react'

const Search = ({setSearch}) => {
  return (
    <div className="px-[10px]">
        <input
            className="w-full h-[30px] my-[15px] border-black rounded-xl border-2 text-center" 
            type="text"
            placeholder='Search'
            onChange={(e) => {setSearch(e.target.value)}} /* buscador */
        />
    </div>
    
  )
  
}

export default Search