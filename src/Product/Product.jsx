import "./Product.css"
let Product=({data})=>{

    let cdn="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/"
    let {name,cloudinaryImageId,locality,areaName,avgRating}=data

    return (
        <div className="product-parent">
            <div className="product_image">
                <img src={cdn+cloudinaryImageId} alt={cloudinaryImageId} />

            </div>
            <div className="product_content">
                <h4>{name}</h4>
                <h4>{locality}</h4>
                <h4>{areaName}</h4>
                <h4>{avgRating}</h4>
            </div>
        </div>
    )
}


export default Product