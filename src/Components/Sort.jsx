import React from 'react'
import SortNum from '../Images/sortNum.png'
import SortStr from '../Images/sort.png'
import { useState } from 'react'

const Sort= ({handleStr, handleNum}) => {

    const [sortByNumber, setSortByNumber] = useState(true)

    const handleChange = () => {
        if(!sortByNumber) {
            handleNum()
        } else {
            handleStr()
        }
        setSortByNumber(!sortByNumber)
    }

    return (
        <div className="w-[200px] h-[50px] flex items-center justify-end">
            <button onClick={() => handleChange()} className="font-bold">change to</button>
            <button className="w-[50px] h-[50px]"
                onClick={() => handleChange()}
            >
                {sortByNumber ? <i className='fa-solid fa-arrow-down-a-z text-[30px]'></i> :  <i className='text-[30px] fa-solid fa-arrow-down-1-9'></i>}
            </button>
            
        </div>
    )
}

export default Sort;