import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Tarefas from './pages/tarefas';
import Incluir from './pages/incluir';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/tarefas' Component={Tarefas}/>
          <Route path='/incluir' Component={Incluir}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
