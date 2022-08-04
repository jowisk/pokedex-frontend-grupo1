import React from 'react'
import Header from './Header';
import Pokemon from './Pokemon'
import Search from './Search';
import Spinner from './Spinner';

const PokemonList = ({pokemonList, handleNum, handleStr, setSearch, cargando}) => {

  
  return (
    <div className="flex flex-col">
        <Header
            handleStr={handleStr}
            handleNum={handleNum}
            setSearch={setSearch}
          />
        {cargando && <Spinner />}
      <div className="flex flex-wrap items-center justify-center py-[30px] h-full overflow-y-auto">
        {pokemonList.map((pokemon, index) => 
          <Pokemon
            id={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            key={index}
          />
          )}
      </div>
    </div>
  )
}

export default PokemonList;