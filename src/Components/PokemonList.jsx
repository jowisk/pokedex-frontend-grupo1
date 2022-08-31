import React from 'react'
import Header from './Header';
import Pokemon from './Pokemon'
import Spinner from './Spinner';
import AddPokemon from './AddPokemon';

const PokemonList = (props) => {


  return (
    <div className="flex flex-col">

      <div className="z-1">
        
        <Header
            handleStr={props.handleStr}
            handleNum={props.handleNum}
            setSearch={props.setSearch}
          />
        {props.cargando && <Spinner/>}
        <div className="flex flex-wrap items-center justify-center py-[30px] h-full overflow-y-auto w-full">

          {!props.cargando && <AddPokemon/>}
          
          {props.pokemonList.length > 0 ? props.pokemonList.map((pokemon, index) => 
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