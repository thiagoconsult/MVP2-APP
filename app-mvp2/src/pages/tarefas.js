import "../App.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Tarefa from "../components/tarefa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FcHome, FcPlus, FcTodoList } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import DataAtual from "../components/data";

const Tarefas = () => {
    
    const history = useNavigate()

    const [listaTarefas, setListaTarefas] = useState([])
    const [update, setUpdate] = useState()

    const getDados = async () => {
        const urlListaTarefas = "http://127.0.0.1:8010/tarefas"
        const res = await fetch(urlListaTarefas)
        const data = await res.json()
        setListaTarefas(data)
    }

    useEffect(() => {

        const fetchData = async () => {
            const urlListaTarefas = "http://127.0.0.1:8010/tarefas"
            const res = await fetch(urlListaTarefas)
            const data = await res.json()
            setListaTarefas(data)
        }

        fetchData()
    },[])

    const handleDelete = (id) => {

        if(window.confirm('Confirma a exclusão desta tarefa?')){

            const deletar = async () =>{
                let url='http://127.0.0.1:8010/tarefa/delete/'

                const options = {
                    method: 'DELETE',
                    headers : {      
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }

                const res = await fetch(url+id, options)
                const data = await res.json()    
            }

            deletar()
            history(0)
            
            const newListaTarefas = listaTarefas.filter(listaTarefas  => listaTarefas.id !== id)
            setListaTarefas(newListaTarefas)
            
        } 
    }

    return (
        <div className="container">
            <Header />

            <nav className="nav-tarefas">

                <span className="nav-acoes">
                    <Link to="/" className="link1"><FcHome size={30}/><h4>Home</h4></Link>
                    <Link to="/incluir" className="link2"><FcPlus size={30}/><h4>Incluir</h4></Link>
                </span>

                <span className="nav-titulo">
                    <FcTodoList size={30} /><h1>Lista de Tarefas</h1>
                </span>
                <span className="nav-data-atual">
                    <DataAtual />
                </span>
                
            </nav>

            <section className="section-tarefas"> 
                {listaTarefas.map((t, i) =>(
                    <Tarefa 
                    tarefa={t} 
                    indice={i} 
                    handleDelete={handleDelete}
                    // handleCheck={handleCheck}
                    />
                    )
                )}
            </section>

            <Footer />
        </div>
    )
}

export default Tarefas;