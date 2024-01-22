import React, { useState } from 'react'

function UserFunction() {

    let [count]=useState(1)
    let [count2]=useState(2)
  return (

    <div>
        <h4>{count}</h4>
        <h4>{count2}</h4>
      
    </div>
  )
}

export default UserFunction
