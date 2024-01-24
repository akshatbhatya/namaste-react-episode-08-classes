import { useEffect, useState } from "react";

function useOnlineStatus(){

    let [onlineStatus,setOnlineStatus]=useState(true)

    useEffect(()=>{
        window.addEventListener(("online",()=>{
            setOnlineStatus(true)
        }))


        window.addEventListener(("offline",()=>{
            setOnlineStatus(false)
        }))
    },[])



    return onlineStatus;
}

export default useOnlineStatus