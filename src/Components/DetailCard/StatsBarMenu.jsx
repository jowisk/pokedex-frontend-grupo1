import React from 'react'
import StatsBar from './StatsBar'

const StatsBarMenu = ({stats}) => {
  return (
    <>
    {stats.map((stat) => 
        <StatsBar
            stat={stat}
        />
    )}
    </>
  )
}

export default StatsBarMenu