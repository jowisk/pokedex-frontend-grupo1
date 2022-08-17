import React from 'react'
import Header from './Header';
import Pokemon from './Pokemon'
import Spinner from './Spinner';
import Login from './Login';
import AddPokemon from './AddPokemon';
const PokemonList = ({pokemonList, handleNum, handleStr, setSearch, cargando}) => {

  
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

          {pokemonList.map((pokemon, index) => 
            <Pokemon
              id={pokemon.id}
              image={pokemon.image}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
            />
            )}
        </div>
      </div>
    </div>
  )
}

export default PokemonList;