import React from "react"
import {RouterProvider,createBrowserRouter} from "react-router-dom"


import reactDom from "react-dom/client"
import App from "./App"
import ProductPage from "./src/ProductPage/ProductPage"
import About from "./src/About/About"



let componentRouter=createBrowserRouter([
    { 
       path:"",
        Element:<App/>,
        children:[

            {
                path:"/",
                Element:<ProductPage/>
            },
            {
                path:"/about",
                Element:<About/>
            
            }

        ]
    }
])
let root=reactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={componentRouter}/>)