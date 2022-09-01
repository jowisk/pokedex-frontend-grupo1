import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'

import OptionR from '../Components/OptionR'

const Create = (props) => {
  
  let location = useLocation()
  const data = location.state
  
  const history = useNavigate()
  
  const [typesAndMoves, setTypesAndMoves] = useState([])
  
  const token = localStorage.getItem('token')
  console.log("token", token === "null")

  const fetchTypesAndMoves = async () => {
    const result = await fetch("http://localhost:4000")
    const data = result.json()
    setTypesAndMoves(data)
  }
  const types = [null ,"fire", "ice", "grass", "water", "rock", "ground", "steel", "fight", "ghost", "psychic", "poison", "dark", "flying", "dragon", "bug", "electric", "normal"]
  useEffect(() => {
    fetchTypesAndMoves()
    if (token === "null") {
      history('/')
    }
  }, [])

  return (
    <div className="h-screen border-l-[2px] border-r-[2px] px-[20px] border-black bg-cover bg-[#FCCF00] flex flex-col">
      <div className="m">
        <div className="flex justify-center">
          <h1>Adding new pokemon</h1>
        </div>

        <div className="flex">
          <p className="mr-[10px]">Name:</p>
          <input className="border-[1px] border-black h-[1.5rem]" type="text"/>
          <p>#ID ARRAY.LENGTH+1</p>
        </div>

        <div className="flex">
          <p className="mr-[10px]">Move 1:</p>
          <select className="border-[1px] border-black h-[1.5rem]" name="" id="">
            {types.map((type, index) => (
              <OptionR
                key = {index}
                type = {type}
              />
            ))}
          </select>
        </div>

        <div className="flex">
          <p className="mr-[10px]">Move 2:</p>
          <select className="border-[1px] border-black h-[1.5rem]" name="" id="">
          {types.map((type, index) => (
              <OptionR
                key = {index}
                type = {type}
              />
            ))}
          </select>
          <p>#ID ARRAY.LENGTH+1</p>
        </div>

        <div className="flex">
          <p className="mr-[10px]">Type 1:</p>
          <select className="border-[1px] border-black h-[1.5rem]" name="" id="">
            <option value="Move1">Move1</option>
          </select>
          <p>#ID ARRAY.LENGTH+1</p>
        </div>

        <div className="flex">
          <p className="mr-[10px]">Type 2 (optional):</p>
          <select className="border-[1px] border-black h-[1.5rem]" name="" id="">
            <option value="Move1">Move1</option>
          </select>
          <p>#ID ARRAY.LENGTH+1</p>
        </div>

        <div className="flex">
          <p className="mr-[10px]">Type 2 (optional):</p>
          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename"/>
          <input type="submit"/>
          </form>
          <p>#ID ARRAY.LENGTH+1</p>
        </div>
      </div>
      
      

    </div>
  )
}

export default Create