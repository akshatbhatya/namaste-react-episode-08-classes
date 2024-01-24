import { Link } from "react-router-dom"
import "./Header.css"
import useOnlineStatus from "../CustomHooks/useOnlineStatus"


let Header=()=>{
    let checkStatus=useOnlineStatus()

    return(
        <div className="flex justify-between bg-slate-400 shadow-md pr-4 items-center">
            <div className="logo">
                <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1706109296~exp=1706109896~hmac=ca74fe94737df48bd929c438d891c8deceaf33a12fd7e35339818af5becd05a0" className="w-16" alt="" />

             
            </div>

            <div className="navLinks">
                <ul className="flex gap-3">
                    <li>Online Staus:{checkStatus?"🟢":"🔴"}</li>
                <Link to='/'><li>home</li></Link>   
                    <Link to="/about"><li>about</li></Link>
                    <Link to={"/Grosery"}><li>Grosery</li></Link>
                    <Link to="/contact"><li>contact</li></Link>
                    <Link><li>cart</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header