import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'





function Reasturant() {
  const { resId } = useParams()

  let [product, setProduct] = useState([])
  let { name, locality, cuisines } = product[0]?.card?.card?.info || {}
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      let url = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
      let response = await url.json();
      let data = response?.data?.cards;
      setProduct(data);
    } catch (error) {

      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>{name}</h2>
      <h2>{locality}</h2>
      <h3>{cuisines}</h3>

      {

      }

    </div>
  )
}

export default Reasturant
