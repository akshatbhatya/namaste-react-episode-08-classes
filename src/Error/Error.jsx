import React from 'react'
import { useRouteError } from 'react-router'


function Error() {

   let err =useRouteError()
  return (
    <div>
      <h2>something went wrong</h2>
      
    </div>
  )
}

export default Error
