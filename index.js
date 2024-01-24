import React from "react"
import {RouterProvider, createBrowserRouter} from "react-router-dom"

import { lazy,Suspense } from "react"

import reactDom from "react-dom/client"
import App from "./App"
import ProductPage from "./src/ProductPage/ProductPage"
import About from "./src/About/About"
import Reasturant from "./src/Reasturant/Reasturant"
import Error from "./src/Error/Error"
// import Grosery from "./src/Grosery/Grosery"


const Grosery=lazy(()=>import("./src/Grosery/Grosery"))


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
                element:<Suspense fallback={<h1>Loading.....</h1>}><Grosery/></Suspense>

            }
        ]

    }
    

])
let root=reactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={componentRouter}/>)

