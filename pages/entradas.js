import { useEffect } from "react";
import httpInternal from '../config/httpInternal'
import { useRouter } from "next/router";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Handler() {
    const [user, setUser] = useLocalStorage("user", "");

    return (
        <>
            <div className="col-12 text-end">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEntry">
                    Cadastrar entrada
                </button>

                <div className="modal fade" id="modalEntry" tabindex="-1" aria-labelledby="modalEntryLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="modalEntryLabel">Cadastrar entrada</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInputDescription" placeholder="Insira a descrição" />
                                        <label htmlFor="floatingInputDescription" className="ms-3">Descrição</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="date" className="form-control" id="floatingInputDate" placeholder="Insira a data" />
                                        <label htmlFor="floatingInputDate" className="ms-3">Data</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" step='0.01' className="form-control" id="floatingInputValue" placeholder="Insira o valor" />
                                        <label htmlFor="floatingInputValue" className="ms-3">Valor (R$)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}