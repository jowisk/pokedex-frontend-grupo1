import React from 'react'

const OptionR = (props) => {
  return (
    <>
        {/* {props.key = 0 ? <option value={props.key}>{props.type}</option> : } */}
        <option value={props.key}>{props.type}</option>
    </>
  )
}

export default OptionR