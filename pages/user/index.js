import md5 from "md5";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from '../../config/http';

export default function Handler() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const route = useRouter();
    
    async function save() {
        const user = await axios.post('createUser', {
            email,
            nome,
            senha
        });

        console.log(user)

        route.push("/")
    }

    return (
        <div className="container mt-5">
            <div className='btn-goup mb-3 text-end'>
                <button className='btn fw-bolder' onClick={() => route.push("/")}>
                    Cancelar
                </button>
            </div>
            <div className="col">
                <label>Nome</label>
                <input type='text' id='name' className='form-control' value={nome} onChange={e => setNome(e.target.value)} />
            </div>

            <div className="col">
                <label>E-mail</label>
                <input type='text' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="col">
                <label>Senha</label>
                <input type='password' className='form-control' value={senha} onChange={e => setSenha(e.target.value)} />
            </div>

            <div className='btn-goup mt-3'>
                <button className='btn btn-primary' onClick={save}>
                    Salvar
                </button>
            </div>
        </div>
    )
}