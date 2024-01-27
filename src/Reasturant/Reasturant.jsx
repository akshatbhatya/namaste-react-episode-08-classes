import React, { useState } from 'react';
import { useParams } from 'react-router'
import ShemerPage from '../ShemmerPage/ShemmerPage'
import useResturantmenu from '../CustomHooks/UseResturantmenu'
import { useEffect } from 'react';
import CategoryAcc from "./../CategoryAcc/CategoryAcc"

function Reasturant() {

  let [showIndex,setShowIndex]=useState(null)


  useEffect(() => {
    document.title = "Product-Detail"

    return () => {
      document.title = "Swiggy Store"
    }
  }, [])
  const { resId } = useParams()

  let product = useResturantmenu(resId);

  let { name, locality, cuisines, avgRating, cloudinaryImageId, city
    , costForTwoMessage
  } = product[0]?.card?.card?.info || {}

  let data = product[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  let category = data.filter((c) => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  if (product.length == 0) {
    return <ShemerPage />
  }

  return (

    <>
      <div className=' my-20  flex p-2 gap-5 bg-[#f0f0f0] w-6/12 mx-auto shadow-xl'>
      <div className="image">

        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/${cloudinaryImageId}`} className="w-[300px] h-[300px] " alt="" />
      </div>

      <div className="content">

        <h2 className='font-bold my-6'>{name}</h2>
        <h3 className={avgRating > 4 ? "font-medium text-green-600" : "font-medium text-yellow-400"}>* {avgRating}</h3>
        <h3 className='text-green-600'>{costForTwoMessage}</h3>
        <h3>{locality}</h3>
        <h2>{city}</h2>
        <h3>{cuisines}</h3>
      </div>

      </div>
      {
        category.map((data,index)=><CategoryAcc data={data} key={index} click={index===showIndex?true:false} setShowIndex={()=>setShowIndex(index) } />)
      }

    </>
  )
}

export default Reasturant;
