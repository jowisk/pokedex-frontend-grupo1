import React from 'react'
import Header from './Header';
import Pokemon from './Pokemon'
import Spinner from './Spinner';
import Login from './Login';
import AddPokemon from './AddPokemon';
const PokemonList = ({pokemonList, handleNum, handleStr, setSearch, cargando}) => {

  pokemonList.map((pokemon, index) => {
    console.log(index)
  })
  console.log(pokemonList)

  return (
    <div className="flex flex-col">
      <div className="w-full ">
        {/* <Login/> */}
      </div>
      {/* !authorized && <login/> */}
      <div className="z-1">
        
        <Header
            handleStr={handleStr}
            handleNum={handleNum}
            setSearch={setSearch}
          />
        {cargando && <Spinner/>}
        <div className="flex flex-wrap items-center justify-center py-[30px] h-full overflow-y-auto">

          {!cargando && <AddPokemon/>}
          
          {pokemonList.length > 0 ? pokemonList.map((pokemon, index) => 
            <Pokemon
              key = {index}
              id={pokemon.id}
              img={pokemon.img}
              name={pokemon.nombre}
              type={pokemon.types[0]?.nombre}
            />
            ) : null}

            
        </div>
      </div>
    </div>
  )
}

export default PokemonList;