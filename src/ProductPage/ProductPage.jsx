import { useEffect, useState } from "react"
import Product from "../Product/Product"
import { Link } from "react-router-dom"
import ShemerPage from "../ShemmerPage/ShemmerPage"
import useOnlineStatus from "../CustomHooks/useOnlineStatus"


let ProductPage = () => {
    let url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    const [product, setProduct] = useState([])

    const [search, setSearch] = useState("");

    const [filterData, setFilterData] = useState([])

    let checkStatus=useOnlineStatus()

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
            setFilterData(allProduct)

        } catch (error) {
            console.log(error);

        }

    }

    if (checkStatus === false) return <h1>You are Looking Offline Check Your Connectivity</h1>

    if (product.length == 0) {
        return <ShemerPage />
    }

    let filterSearch = () => {
        let findData = product.filter((item) => {
            return item.name.toLowerCase().includes(search.toLocaleLowerCase())
        })
        if (findData.length > 0) {
            setFilterData(findData)
        }
        else {
            alert("not found")
            setFilterData(product)
            setSearch("")
        }
    }

    let topRated = () => {
        let topRatedData = product.filter((item) => item.avgRating > 4.3)
        setFilterData(topRatedData)
    }
    return (

        <>

            <input type="text" placeholder="search here.." value={search} onChange={(e) => setSearch(e.target.value)} className="mt-10 border border-solid border-black rounded px-2 mx-5  "/>
            <button onClick={filterSearch} className="bg-green-500 text-white px-2 rounded shadow-sm mx-2 ">Search</button>
            <button onClick={topRated} className="bg-green-500 text-white px-2 rounded shadow-sm mx-2">Top Rated</button>
            <br />
            <br />
            <div className="mx-5 my-5 flex-wrap  gap-5 flex justify-center ">
                {
                    filterData.map((item) => {
                        return <Link key={item.id} to={"/reasturant/" + item.id}><Product data={item} /></Link>
                    })
                }
            </div>
        </>
    )
}

export default ProductPage