import React, { useEffect } from 'react'

function ProductDetail() {

    useEffect(()=>{
        fetchData()
    },[])

    let fetchData=async()=>{
        let url=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=248278&catalog_qa=undefined&submitAction=ENTER");
        let response=await url.json();
        console.log(response);
    }
  return (
    <div>
      
    </div>
  )
}

export default ProductDetail
