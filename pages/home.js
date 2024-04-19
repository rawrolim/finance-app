import { useEffect } from "react";
import httpInternal from '../config/httpInternal'

export default function Handler() {
    useEffect(async ()=>{
        await httpInternal.get("teste")
    },[])
    return (
        <div>
            
        </div>
    )
}