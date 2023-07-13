import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./form.css";

const Form = () =>{

    const [titulo, setTitulo] = useState()
    const [descricao, setDescricao] = useState()
    const [cadastrando, setCadastrando] = useState(false)
    const [cadastradoComSucesso, setCadastradoComSucesso] = useState(false)

    const history = useNavigate()
    
    console.log(titulo)

    useEffect(()=>{
        console.log(titulo)
        console.log(descricao)
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        setCadastrando(true)
        const newTarefa = JSON.stringify({
            "titulo":titulo, 
            "descricao":descricao
        })

        let url = 'http://127.0.0.1:8010/tarefa';
        
        const options = {
            method: 'POST',
            body: newTarefa,
            headers : {      
                'Content-Type': 'application/json',
            }
        }

        let response = await fetch(url, options)
        .then(()=>{
           
            setTimeout(() => {
                // history('/sucesso');
                setCadastrando(false)
                setCadastradoComSucesso(true)
            }, 1000);

            setTimeout(() => {
                history('/tarefas')
            }, 2000);
            
        })
    }

    const handleCancelar = (e) => {
        history('/tarefas');
    }
    
    return (
        <div className="form-create">
            <form onSubmit={handleSubmit}>
                <h1>Preencha os dados da nova tarefa</h1>
                <label>
                    <h3>Título da Tarefa:</h3>
                    <input 
                        type="text"
                        required
                        value={titulo}
                        onChange={(e)=>{setTitulo(e.target.value)}}
                        maxLength={15}
                    />
                </label>

                <label>
                    <h3>Descrição da Tarefa:</h3>
                    <textarea
                        rows={4} 
                        value={descricao}
                        onChange={(e)=>{setDescricao(e.target.value)}}
                        maxLength={80}
                    />

                </label>
                    <button className="btn-salvar">Salvar</button>
                    <button className="btn-cancelar" onClick={handleCancelar}>Cancelar</button>
                    
            </form>
            { cadastrando &&
            <h3>Cadastrando...</h3>
            }
            { cadastradoComSucesso &&
            <h3>Tarefa cadastrada com sucesso!</h3>
            }
        </div> 
    )
}

export default Form;