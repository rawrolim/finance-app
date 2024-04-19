import { useEffect } from "react";
import httpInternal from '../config/httpInternal'

export default function handler() {
    useEffect(async ()=>{
        await httpInternal.get("teste")
    },[])
    return (
        <div>
            
        </div>
    )
}