import React from 'react'
import PokemonList from '../Components/PokemonList'
import { useState, useEffect } from 'react'


const Home = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [cargando, setCargando] = useState(false)
  const [search, setSearch] = useState('') /* buscador */

  const getPokemonList = async () => {
    setCargando(true)
    /*const result = await fetch('https://us-central1-senpai-9b555.cloudfunctions.net/getFullList')*/
    const result = await fetch('http://localhost:4000')
    const data = await result.json();
    setPokemonList(data)
    console.log(data)
    setCargando(false)
  }

  
  
  useEffect(() => {
    getPokemonList();
  }, [])
  
  const handleStr = () => {
    const strAscending = [...pokemonList].sort((a,b) => 
      a.name < b.name ? -1 : 1
    );
    setPokemonList(strAscending)
  }

  const handleNum = () => {
    const numAscending = [...pokemonList].sort((a,b) =>
      a.id - b.id
    );
    setPokemonList(numAscending)
  }
  
  return (
    <div className="bg-[#FCCF00] h-full w-full m-auto min-w-[320px] lg:w-[800px]">
      <div className="px-[10px] h-screen w-[40%] m-auto border-l-[2px] border-r-[2px] border-black bg-cover bg-[#F6F6F6] overflow-y-hidden">       
        <div className="overflow-y-scroll h-full">
          <PokemonList
            pokemonList={pokemonList} /* buscador (desde .filter en adelante) */ //expresiones regulares INVESTIGAR
            handleStr={handleStr}
            handleNum={handleNum}
            setSearch={setSearch}
            cargando={cargando}
          /> 
        </div>
      </div>
    </div>
  )
}

export default Home 