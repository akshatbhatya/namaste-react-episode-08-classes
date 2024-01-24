import React from "react"
import {RouterProvider, createBrowserRouter} from "react-router-dom"



import reactDom from "react-dom/client"
import App from "./App"
import ProductPage from "./src/ProductPage/ProductPage"
import About from "./src/About/About"
import Reasturant from "./src/Reasturant/Reasturant"
import Error from "./src/Error/Error"
import Grosery from "./src/Grosery/Grosery"



let componentRouter=createBrowserRouter([
    {
        path:'',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<ProductPage/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:"/reasturant/:resId",
                element:<Reasturant/>
            },
            {
                path:"/Grosery",
                element:<Grosery/>

            }
        ]

    }
    

])
let root=reactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={componentRouter}/>)

