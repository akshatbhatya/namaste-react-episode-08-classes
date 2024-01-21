import "./Header.css"
let Header=()=>{

    return(
        <div className="header_parent">
            <div className="logo">
                <h3>logo</h3>
            </div>

            <div className="navLinks">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header