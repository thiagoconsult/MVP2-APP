import "./tarefa.css";
import { FiEdit, FiCheckSquare } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";


const Tarefa = (props) => {

    const history = useNavigate()

    const tarefa = props.tarefa;
    
    const [dataCriacao] = useState(`${tarefa.data_criacao.substring(8,10)}/${tarefa.data_criacao.substring(5,7)}/${tarefa.data_criacao.substring(0,4)}`)
    const [dataEncerramento, setDataEncerramento] = useState(tarefa.data_encerramento)
    const [status, setStatus] = useState(tarefa.status)

    const pegaDataAtual = () =>{
        let data = new Date();
        let dia = String(data.getDate()).padStart(2, '0');
        let mes = String(data.getMonth() + 1).padStart(2, '0');
        let ano = data.getFullYear();
        let dataAtual = dia + '/' + mes + '/' + ano;
        return dataAtual;
    }
    
    useEffect(()=>{
        
        if(tarefa.data_encerramento){
            setDataEncerramento(`${tarefa.data_encerramento.substring(8,10)}/${tarefa.data_encerramento.substring(5,7)}/${tarefa.data_encerramento.substring(0,4)}`)
        }

        if(status==1){
            setStatus('Pendente')
        }
        if(status==2){
            setStatus('Encerrada')
        }

    },[tarefa])

    const handleCheck = (id) => {
        
        if(window.confirm('Deseja encerrar esta tarefa?')){

            const encerrar = async () => {
                let url = `http://127.0.0.1:8010/tarefa/update/${id}`
                
                const newStatus = JSON.stringify({
                    "status":2
                })

                const options = {
                    method: 'PUT',
                    body: newStatus,
                    headers : {      
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }

                const res = await fetch(url, options)
                const data = await res.json()
            }

            encerrar()
            let dataAtual = pegaDataAtual()
            setDataEncerramento(dataAtual)
            setStatus('Encerrada')
        }
    }

    return (
        <div className="content-tarefa">

            <span className="titulo-tarefa">
                <h1 className="titulo-tarefa-texto">{tarefa.titulo}</h1>
            </span>
            <span className="datas-tarefa">
                <span className="data-tarefa">
                    <h3>Data Inclusão:</h3>
                    <h3>{dataCriacao}</h3>
                </span>
                <span className="data-tarefa">
                    <h3>Encerramento:</h3>
                    <h3>{dataEncerramento}</h3>
                </span>
                <span className="data-tarefa" id="status-tarefa">
                    <h3>Situação:</h3>
                    <h2 className={`"status-tarefa" ${status}`}>{status}</h2>
                </span>
            </span>
            <span className="descricao-tarefa">
                <p>{tarefa.descricao}</p>
            </span>
                       
            <span className="acoes-tarefa">

                <span className="btn btn-excluir" onClick={()=>{props.handleDelete(tarefa.id)}}><h5>Excluir</h5></span>
                
                { status == "Pendente" ?(
                    <span className="btn btn-encerrar" onClick={()=>{handleCheck(tarefa.id)}}><h5>Check</h5></span>
                    ) : null
                }
            </span>

        </div>
    )
}

export default Tarefa;