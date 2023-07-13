import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import imagamTask from "../assets/task_background.png";


const Home = () => {

    return (
        <div className="container">
            <Header />
            
            <section className="section-home">
                <div className="home-imagem">
                <img className="imagem-fundo" src={imagamTask} />
                </div>
                <span className="home-botoes">
                    <span><Link to="tarefas"><h1>Lista de Tarefas</h1></Link></span>
                    <span><Link to="incluir"><h1>Nova Tarefa</h1></Link></span>
                </span>
            </section>

            <Footer />
        </div>
    ) 
}

export default Home;