let CategoryAcc=({data})=>{

    console.log(data);

    return(
        <div className="w-6/12 mx-auto my-5 flex justify-between bg-[#f0f0f0] p-5 rounded-sm shadow-2xl ">
        <span className="text-red-600 font-bold">{data.card.card.title} ({data.card.card.itemCards.length})</span>
        <span className="cursor-pointer font-bold">+</span>
        </div>

    )
}

export default CategoryAcc