import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../Utils/storeSlice";


let Cart = () => {

    let data = useSelector(state => state.items)
    console.log(data);
    let dispatch = useDispatch()

    if (data.length === 0) return <h2>cart is empty</h2>
    return (
        <>

        <button onClick={()=>dispatch(clearItem())}>Empty Cart</button>

            {data?.map((data) => {

                return <div className="flex justify-between items-center w-6/12 bg-[#f0f0f0] mx-auto mt-10 p-5 rounded-lg">

                    <div className="content w-3/5">
                        <h4>{data?.name}</h4>
                        <h4>{data?.description}</h4>
                        <h4>RS {data?.defaultPrice / 100 || data?.price / 100}</h4>
                        <h4>{data?.category}  </h4>

                    </div>

                    <div className="relative">
                        <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_360/${data?.imageId}`}
                            className="w-[150px] h-[150px]"
                            alt="photo"
                        />

                        <div className="absolute top-0">
                            <button className="bg-slate-500 px-3 rounded text-white absolute" onClick={() => dispatch(removeItem(data?.id))}>Remove</button>
                        </div>
                    </div>

                </div>

            })}
        </>
    )
}

export default Cart;