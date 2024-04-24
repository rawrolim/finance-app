import { useEffect } from "react";
import httpInternal from '../config/httpInternal'
import { useRouter } from "next/router";

export default function Handler() {
    const router = useRouter();

    useEffect(async ()=>{
        await send()
    },[]);

    async function send(){
        await httpInternal.get("teste")
    }

    return (
        <div>
            <button className="btn" onClick={send}> 
                Testar
            </button>
            <button className="btn" onClick={()=>router.push("/entradas")}> 
                Entradas
            </button>
        </div>
    )
}