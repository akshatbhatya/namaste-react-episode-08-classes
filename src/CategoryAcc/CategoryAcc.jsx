import { useState } from "react";

let CategoryAcc = ({ data ,click,setShowIndex}) => {


    return (
        <>

            <div className="w-6/12 mx-auto mt-5 flex justify-between bg-[#f0f0f0] p-5 rounded-sm shadow-2xl cursor-pointer" onClick={setShowIndex}>
                <span className="text-red-600 font-bold">{data.card.card.title} ({data.card.card.itemCards.length})</span>
                <button className="cursor-pointer font-bold" onClick={setShowIndex}>+</button>
            </div>

            <div className={click ? "w-6/12 mx-auto bg-[#f0f0f0] p-5 rounded-sm shadow-2xl mb-5" : "hidden"}>
                {data?.card?.card?.itemCards?.map((item, index) => <div key={index} className="list-none"><>
                    <br />

                    <div className="flex justify-between items-center">

                        <div className="content">
                            <h4>{item?.card?.info?.name}</h4>
                            <h4>{item?.card?.info?.description}</h4>
                            <h4>RS {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}</h4>
                            <h4>{item?.card?.info?.category}</h4>
                        </div>

                        <div className="relative">
                            <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/${item?.card?.info?.imageId}`}
                                className="w-[150px] h-[150px]"
                                alt="photo"
                            />

                            <div className="absolute top-0">
                                <button className="bg-slate-500 px-3 rounded text-white absolute">Add</button>
                            </div>
                        </div>

                    </div>
                    <br />
                    <br />
                    <hr />
                </>
                </div>)}
            </div>
            <br />
        </>
    )
}

export default CategoryAcc