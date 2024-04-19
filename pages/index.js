import axios from "../config/http";
import { useRouter } from "next/router"
import { useState } from "react";
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [token, setToken] = useLocalStorage("token", "");

  async function logar() {
    try {
      const res = await axios.post('/login', {
        email,
        senha
      });
      setToken(res.data.jwtToken);
      router.push("home")
    } catch (e) {
      toast.error(e.response.data.message)
      console.error(e)
    }
  }

  return (
    <div className='h-100 d-flex'>
      <div className="border col-8 d-none d-md-block">

      </div>
      <div className="border justify-content-center col d-flex">
        <div className='col-10 align-self-center'>
          <div>
            <label>E-mail</label>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
          </div>
          <div className="mt-3">
            <label>Senha</label>
            <input type='password' value={senha} onChange={e => setSenha(e.target.value)} className='form-control' />
          </div>
          <div className="mt-3 btn-goup text-center">
            <a className="btn btn-link" onClick={() => { router.push('/user') }}>
              Cadastrar-se
            </a>
            <button className='btn btn-primary' onClick={logar}>
              Logar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
