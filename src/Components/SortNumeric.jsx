import React from 'react'
import sortNumericimg from '../Images/sortnumeric.png'

const SortNumeric = ({handleNumeric}) => {
  return (
    <div>
            <button onClick={() => {
            {handleNumeric()}
            }}>
                <img
                    className="w-[30px] h-[30px]" 
                    onClick={e => handleNumeric(false)}
                    src={sortNumericimg}
                />
            </button>
        </div>
  )
}

export default SortNumeric;