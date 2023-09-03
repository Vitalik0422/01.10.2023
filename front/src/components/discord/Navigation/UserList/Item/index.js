import React from 'react'

const index = (props) => {
    const {uId, name} = props

    console.log(name);
    // const {name} = item
  return (
    <div>
        <div>{name}</div>
    </div>
    
  )
}

export default index