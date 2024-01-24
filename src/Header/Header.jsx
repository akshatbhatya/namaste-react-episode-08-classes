import { Link } from "react-router-dom"
import "./Header.css"
import useOnlineStatus from "../CustomHooks/useOnlineStatus"


let Header=()=>{
    let checkStatus=useOnlineStatus()

    return(
        <div className="header_parent">
            <div className="logo">
                <h3>logo</h3>
            </div>

            <div className="navLinks">
                <ul>
                    <li>Online Staus:{checkStatus?"🟢":"🔴"}</li>
                <Link to='/'><li>home</li></Link>   
                    <Link to="/about"><li>about</li></Link>
                    <Link to="/contact"><li>contact</li></Link>
                    <Link><li>cart</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header