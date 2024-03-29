import React from "react"
import {RouterProvider, createBrowserRouter} from "react-router-dom"

import { lazy,Suspense } from "react"

import reactDom from "react-dom/client"
import App from "./App"
import ProductPage from "./src/ProductPage/ProductPage"
import Reasturant from "./src/Reasturant/Reasturant"
import Error from "./src/Error/Error"
import Cart from "./src/Cart/Cart"
// import Grosery from "./src/Grosery/Grosery"

let About=lazy(()=>import("./src/About/About"))
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
                element:<Suspense fallback={<h1>loading....</h1>}><About/>1</Suspense>
            },
            {
                path:"/reasturant/:resId",
                element:<Reasturant/>
            },
            {
                path:"/Grosery",
                element:<Suspense fallback={<h1>Loading.....</h1>}><Grosery/></Suspense>

            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]

    }
    

])
let root=reactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={componentRouter}/>)

