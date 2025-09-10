import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Empresa from './rotas/Empresa';
import Contato from './rotas/Contato';
import Home from './rotas/Home'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/empresa">Empresa</Link></li>
          <li><Link to="/contato">contato</Link></li>

        </ul>
      

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/empresa' element={ <Empresa /> } />
          <Route path='/contato' element={ <Contato /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
