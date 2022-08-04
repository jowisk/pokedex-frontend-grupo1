import React from 'react'

const ImagenPokemon = ({image}) => {
  return (
    <div className="w-full h-full">
      <img src={image} alt="" className="w-[110px] h-[110px] relative top-[1%] m-auto left-0 right-0" />
    </div>
  )
}

export default ImagenPokemon