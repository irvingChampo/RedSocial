import CompletarPerfil from '../Components/Organisms/CompletarPerfil';
import Login from '../Components/Organisms/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegistroGoogle from '../Components/Organisms/RegistroGoogle';
import Feed from '../Components/Organisms/Feed'
import Configuracion from '../Components/Organisms/Configuracion'
import './App.css';

function App() {
    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Registro' element={<RegistroGoogle/>}/>
                <Route path='/CompletarPerfil' element={<CompletarPerfil/>}/>
                <Route path='/Home' element={<Feed/>}/>
                <Route path='/Configuracion' element={<Configuracion/>}/>
            </Routes>
        </Router>
     );
}

export default App;