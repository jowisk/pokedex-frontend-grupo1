import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import imagenPokebola from '../Images/pokebola.png'
import TypeList from './TypeList'
import WheightList from './WheightList'

const DetailCard = ({id}) => {

    const [selectedPokemon, setSelectedPokemon ] = useState({});
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState({})
    const [selectedPokemonText, setSelectedPokemonText] = useState("")
    const [selectedPokemonHP, setSelectedPokemonHP] = useState("")
    const [selectedPokemonATK, setSelectedPokemonATK] = useState("")
    const [selectedPokemonDEF, setSelectedPokemonDEF] = useState("")
    const [selectedPokemonSATK, setSelectedPokemonSATK] = useState("")
    const [selectedPokemonSDEF, setSelectedPokemonSDEF] = useState("")
    const [selectedPokemonSPD, setSelectedPokemonSPD] = useState("")
    const [pokemonTypes, setPokemonTypes] = useState ("")
    const [pokemonType, setPokemonType] = useState("")
    const [pokemonType2, setPokemonType2] = useState("")


    const getPokemon = () => {
        fetch(`https://us-central1-senpai-9b555.cloudfunctions.net/getPokemon?id=${id}`)
        .then (res => res.json())
        .then ((fetchedPokemon) => {
            setSelectedPokemon(fetchedPokemon);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const getPokemonDetails = async () => {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const fetchedPokemon = await result.json();
            setSelectedPokemonDetails(fetchedPokemon);
            setPokemonType(fetchedPokemon.types[0].type.name)
            setPokemonTypes(fetchedPokemon.types[{}])
            setSelectedPokemonHP(fetchedPokemon.stats[0].base_stat)
            setSelectedPokemonATK(fetchedPokemon.stats[1].base_stat)
            setSelectedPokemonDEF(fetchedPokemon.stats[2].base_stat)
            setSelectedPokemonSATK(fetchedPokemon.stats[3].base_stat)
            setSelectedPokemonSDEF(fetchedPokemon.stats[4].base_stat)
            setSelectedPokemonSPD(fetchedPokemon.stats[5].base_stat)
            console.log(pokemonType)
    }

    const getPokemonText = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(res => res.json())
        .then((fetchedPokemon) => {
            setSelectedPokemonText(fetchedPokemon.flavor_text_entries[5].flavor_text)
        })
        .catch ((error) => {
            console.log(error)
        })
    }


    
    useEffect(() => {
        getPokemon();
        getPokemonDetails();
        getPokemonText();
      }, [id])

    const nextPokemon = parseInt(id) + 1;
    const previousPokemon = parseInt(id) - 1;
      
    return (
    
    <div className={`border${pokemonType} background${pokemonType} w-full h-full border-[5px] rounded-[10px]`}>
        <img src={selectedPokemon.image} className="absolute top-[13%] z-[100] m-auto left-0 right-0 w-[250px] h-[250px]"/>

        <div className={` w-full h-[33%] p-[20px] flex flex-col justify-between`}>
            <div className=" flex justify-between">
                <div className="flex items-center">
                    <Link to='/'>
                        <i class="fa-solid fa-arrow-left text-[30px] text-white mr-[10px]"></i>
                    </Link>

                    <p className={`font-semibold text-[25px] capitalize text-white`}>{selectedPokemon.name}</p>
                </div>

                <div className="flex items-center">
                    <p className="text-[25px] font-semibold text-white">#{String(selectedPokemon.id).padStart(3,'0')}</p>
                </div>
            </div>
            
            <div className="flex flex-col items-end">
                <img src={imagenPokebola} className="opacity-30 static ml-[150px] h-[200px] w-[200px]" alt="" srcset="" />

                {
                    (id < 2) ? 

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

        <div className="w-full h-[65%] rounded-[10px] mt-[15px] bg-white">
            <div className="w-full h-full flex flex-col rounded-[10px] ">
                <div className="mt-[50px] flex w-full justify-center rounded-[10px] text-white capitalize">
                    <TypeList
                        selectedPokemonDetails={selectedPokemonDetails}
                    />
                </div>

                <div>
                    <div className="flex justify-center mt-[20px] ">
                        <h3 className={`font-bold text-[20px] id${pokemonType}`}>About</h3>
                    </div>

                    <div className="flex justify-around mt-[25px]">
                        <div className="flex w-full justify-around px-[20px]">
                            <WheightList
                                selectedPokemonDetails={selectedPokemonDetails}
                            />
                        </div>
                    </div>

                    <div className="mt-[20px] px-[20px]">
                        <p className="text-center">{selectedPokemonText.replace('', ' ')}</p>
                    </div>

                    <div className="flex flex-col mt-[20px]">
                        <p className={`text-center font-bold id${pokemonType}`}>Base Stats</p>

                        <div className="uppercase px-[40px] w-full mt-[25px]">
                            <div className='w-full'>
                                <div className="flex items-center w-full justify-between">
                                    <div className="w-[20%] flex justify-between">
                                        <p>HP</p>
                                        <p>{selectedPokemonHP}</p>
                                    </div>
                                    <div className={`w-[70%] bg-slate-300 rounded-[10px]`}>
                                        <div className={`h-[0.8rem] background${pokemonType} w-[${selectedPokemonHP / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                    </div>
                                </div>

                                <div className="flex items-center w-full justify-between">
                                    <div className="w-[20%] flex justify-between">
                                        <p>ATK</p>
                                        <p>{selectedPokemonATK}</p>
                                    </div>
                                    <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                        <div className={`h-[0.8rem] background${pokemonType} w-[${selectedPokemonATK / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                    </div>
                                </div>

                                <div className="flex items-center w-full justify-between">
                                    <div className="w-[20%] flex justify-between">
                                        <p>DEF</p>
                                        <p>{selectedPokemonDEF}</p>
                                    </div>
                                    <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                        <div className={`h-[0.8rem] background${pokemonType} w-[${selectedPokemonDEF / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                    </div>
                                </div>

                                <div className="flex items-center w-full justify-between">
                                    <div className="w-[20%] flex justify-between">
                                        <p>SATK</p>
                                        <p>{selectedPokemonSATK}</p>
                                    </div>
                                    <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                        <div className={`h-[0.8rem] background${pokemonType} w-[${selectedPokemonSATK / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                    </div>
                                </div>

                                <div className="flex items-center w-full justify-between">
                                    <div className="w-[20%] flex justify-between">
                                        <p>SDEF</p>
                                        <p>{selectedPokemonSDEF}</p>
                                    </div>
                                    <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                        <div className={`h-[0.8rem] background${pokemonType} w-[${selectedPokemonSDEF / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                    </div>
                                </div>

                                <div className="flex items-center w-full justify-between">
                                    <div className="w-[20%] flex justify-between">
                                        <p>SPD</p>
                                        <p>{selectedPokemonSPD}</p>
                                    </div>
                                    <div className="w-[70%] bg-slate-300 rounded-[10px]">
                                        <div className={`h-[0.8rem] background${pokemonType} w-[${selectedPokemonSPD / 1.1}%] rounded-[10px] max-w-[100%]`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailCard