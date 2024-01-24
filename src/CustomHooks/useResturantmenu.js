import { useEffect, useState } from "react"

const useResturantmenu=(resId)=>{
    let [product, setProduct] = useState([])

    useEffect(()=>{

        fetchData()

    },[])

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
  return product  

    }

export default useResturantmenu;