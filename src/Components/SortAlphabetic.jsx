import React from 'react'
import imagenSort from '../Images/sort.png'


const SortAlphabetic = ({handleAlphabetic}) => {
    return (
        <div>
            <button onClick={() => {
            {handleAlphabetic()}
            }}>
                <img
                    className="w-[30px] h-[30px]" 
                    onClick={e => handleAlphabetic(true)}
                    src={imagenSort}
                />
            </button>
        </div>
      )
}

export default SortAlphabetic;