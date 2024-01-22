import React, { useEffect } from 'react'
import { useParams } from 'react-router'





function Reasturant() {
    const{resId}=useParams()

    useEffect(()=>{
        fetchData()
    },[])

    let fetchData=async()=>{
        let url=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        let response=await url.json();
        console.log(response);
    }
  return (
    <div>
      res
    </div>
  )
}

export default Reasturant
