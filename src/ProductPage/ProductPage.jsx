import { useEffect, useState } from "react"
import Product from "../Product/Product"
import "./ProductPage.css"
let ProductPage = () => {
    let url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.62984520058017&lng=74.83495283871889&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    const [product,setProduct]=useState([])

    useEffect(() => {
        async function fetchData() {

            let fetchData = await fetch(url);
            let response = await fetchData.json();
            let result=(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            console.log(result);
            let allProduct=[]
            for(let i=0;i<result.length;i++){
                allProduct.push(result[i].info)

            }
            console.log(allProduct);
            setProduct(allProduct)
        }
        fetchData()
    }, [])

    

    return (
        <div className="productPage_parent">
           {
            product.map((item)=>{
                return  <Product data={item} key={item.id}/>
            })
           }

        </div>
    )
}

export default ProductPage