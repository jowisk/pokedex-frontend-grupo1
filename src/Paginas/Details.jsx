import React from 'react'
import DetailCard from '../Components/DetailCard'
import imagenBulbasaur from '../Images/bulbasaur.png'
import { useParams } from 'react-router-dom'

const Details = () => {

  const {id, index} = useParams();
  
  return (
    <div className="h-screen w-full lg:p-[10px]">
        <DetailCard
          id={id}
          index={index}
        />
      
    </div>
  )
}

export default Details;

