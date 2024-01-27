import { Link } from "react-router-dom"
import useOnlineStatus from "../CustomHooks/useOnlineStatus"
import { useSelector } from "react-redux"

let Header=()=>{
    let checkStatus=useOnlineStatus()

    const addItems=useSelector(state=>state.items)
    console.log(addItems);

    return(
        <div className="flex justify-between bg-slate-400 shadow-md pr-4 items-center">
            <div className="logo">
                <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1706109296~exp=1706109896~hmac=ca74fe94737df48bd929c438d891c8deceaf33a12fd7e35339818af5becd05a0" className="w-16" alt="" />
       
            </div>

            <div className="navLinks">
                <ul className="flex gap-3">
                    <li className="text-white font-medium">Online Staus : {checkStatus?"🟢":"🔴"}</li>
                <Link to='/'><li className="text-white font-medium">Home</li></Link>   
                    <Link to="/about"><li className="text-white font-medium">About</li></Link>
                    <Link to={"/Grosery"}><li className="text-white font-medium">Grosery</li></Link>
                    <Link to="/contact"><li className="text-white font-medium">Contact</li></Link>
                    <Link><li className="text-white font-medium">Cart:{addItems.length}</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header