import React from 'react'

const ImagenPokemon = ({img}) => {
  // console.log(img)
  return (
    <div className="w-full h-full">
      <img src={img} alt="" className="w-[110px] h-[110px] relative top-[1%] m-auto left-0 right-0" />
    </div>
  )
}

export default ImagenPokemon