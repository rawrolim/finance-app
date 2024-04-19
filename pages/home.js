import { useEffect } from "react";
import httpInternal from '../config/httpInternal'

export default function Handler() {
    useEffect(async ()=>{
        await send()
    },[]);

    async function send(){
        await httpInternal.get("teste")
    }

    return (
        <div>
            <button onClick={send}> 
                Testar
            </button>
        </div>
    )
}