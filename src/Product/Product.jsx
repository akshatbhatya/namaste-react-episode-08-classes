import "./Product.css"
let Product = ({ data }) => {

    let cdn = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/"
    let { name, cloudinaryImageId, locality, areaName, avgRating } = data

    return (
        <div className="inline-block bg-[#f0f0f0] p-4 rounded-md">
            <div className="product_image">
                <img src={cdn + cloudinaryImageId} className="w-[300px] rounded-sm h-[300px]" alt={cloudinaryImageId} />

            </div>
            <div className="mt-5">
                <h4>{name}</h4>
                <h4>{locality}</h4>
                <h4>{areaName}</h4>
                <h4>{avgRating}</h4>
            </div>
        </div>
    )
}


export default Product