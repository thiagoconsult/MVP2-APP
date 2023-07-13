import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { FcHome, FcTodoList, FcPlus } from "react-icons/fc";
import Form from "../components/form";
import DataAtual from "../components/data";

const Incluir = () => {
    return (
        <div className="container">
            <Header />

            <nav className="nav-tarefas">
                <span className="nav-acoes">
                    <Link to="/" className="link1"><FcHome size={30}/><h4>Home</h4></Link>
                    <Link to="/tarefas" className="link2"><FcTodoList size={30}/><h4>Tarefas</h4></Link>
                </span>
                <span className="nav-titulo">
                    <FcPlus size={30} /><h1>Nova Tarefa</h1>
                </span>
                <span className="nav-data-atual">
                    <DataAtual/>
                </span>

            </nav>
        
            <section className="section-incluir">
                <Form />
                <q>
                Uma tarefa é uma atividade ou um trabalho que há a fazer. A noção costuma referir-se a uma obrigação ou a um compromisso, 
                e não a um gosto ou a algo que se realiza só por prazer. Exemplos: “Vou chegar um pouco mais tarde: ainda não acabei as 
                minhas tarefas”, “Atender o telefone, enviar um ou outro e-mail ou resolver alguma urgência do meu chefe são algumas das 
                minhas tarefas do dia-a-dia”. <b>Para não esquecer de nenhuma de suas tarefas, utilize este formulário para registrar todas elas.</b>
                </q>
            </section>

            <Footer />
        </div>
    )
}

export default Incluir;