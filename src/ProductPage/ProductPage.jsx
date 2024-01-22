import { useEffect, useState } from "react"
import Product from "../Product/Product"
import "./ProductPage.css"
import { Link } from "react-router-dom"
let ProductPage = () => {
    let url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {

        try {
            let fetchData = await fetch(url);
            let response = await fetchData.json();
            let result = response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            let allProduct = []
            for (let i = 0; i < result.length; i++) {
                allProduct.push(result[i].info)

            }
            setProduct(allProduct)

        } catch (error) {
            console.log(error);

        }

    }



    return (
        <div className="productPage_parent">
            {
                product.map((item) => {
                    return <Link key={item.id} to={"/reasturant/" + item.id}><Product data={item} /></Link>
                })
            }

        </div>
    )
}

export default ProductPage